import styles from '../../styles/Admin.module.css';
import AuthCheck from '../../components/AuthCheck';
import PostFeed from '../../components/PostFeed';
import { firestore, auth, serverTimestamp }  from '../../lib/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../lib/context';
import kebabCase from 'lodash.kebabcase';
import toast from 'react-hot-toast';

export default function AdminPostsPage(props) {
  return (
    <main>
      <AuthCheck>
        <CreateNewPost />
        <hr  className="m-5"/>
        <PostList />
      </AuthCheck>
    </main>
  );
}

// Show all the posts user had created
function PostList() {
  const ref = firestore.collection('users').doc(auth.currentUser.uid).collection('posts');
  const query = ref.orderBy('createdAt');
  const [querySnapshot] = useCollection(query as any);
  const posts = querySnapshot?.docs.map((doc) => doc.data());

  return (
      <>
        <h1>Manage your Posts</h1>
        <PostFeed posts={posts} admin />
      </>
  );
}

// Form to create new post
function CreateNewPost() {
  const router = useRouter();
  const { username } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const slug = encodeURI(kebabCase(title));

  // Validate length
  const isValid = title.length > 3 && title.length < 100;

// Create a new post in firestore
  const createPost = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;
    const ref = firestore.collection('users').doc(uid).collection('posts').doc(slug);
 

    // Give all fields a default value here
    const data = {
      title,
      slug,
      uid,
      username,
      published: false,
      content: '# hello world!', 
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      heartCount: 0
    };
    await ref.set(data);

    toast.success('Post created!')

    //Imperative navigation after doc is set
    router.push(`/admin/${slug}`);
    }
  return (
    <form className="rounded" onSubmit={createPost}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Input your new article topic here"
        className="rounded shadow"
      />
      <p className="mt-2">
        <strong> Slug:</strong> {slug}
      </p>
      <button type="submit" disabled={!isValid} className="btn-green">
        Create New Post
      </button>
    </form>
  )
}