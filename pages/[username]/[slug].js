
import styles from '../../styles/Post.module.css';
import PostContent from '../../components/PostContent';
import { firestore, getUserWithUsername, postToJSON } from "../../lib/firebase";
import { useDocumentData } from 'react-firebase-hooks/firestore';
import Metatags from '../../components/Metatags';
import Link from 'next/link';
import HeartButton from '../../components/HeartButton';
import AuthCheck  from '../../components/AuthCheck';
import { useContext } from 'react';
import { UserContext } from '../../lib/context';
 
export async function getStaticProps({ params }) {
  const { username, slug } = params;
  const userDoc = await getUserWithUsername(username);

  let post;
  let path;

  if (userDoc) {
    const postRef = userDoc.ref.collection('posts').doc(slug);
    post = postToJSON(await postRef.get());

    path = postRef.path;
  }
  
  return {
    props: {post, path},
    revalidate: 5000,
  };
}


  export async function getStaticPaths() {
    // Improve my using Admin SDK to select empty docs
    const snapshot = await firestore.collectionGroup('posts').get();

    const paths = snapshot.docs.map((doc) => {
      const {slug, username } = doc.data();
      return{
        params: {username, slug},
      };
    });
    return {
      // must be in this format:
      // paths: [
        // {params: { username, slug}}
      // ],
      paths,
      fallback: 'blocking',
    };
  }

  export default function Post( props ) {
    console.log({props})
    const postRef = firestore.doc(props.path);
    const [realtimePost] = useDocumentData(postRef);

    const { user: currentUser } = useContext(UserContext);

    const post = realtimePost || props.post;
    // console.log(useDocumentData(postRef))
    return (
      <main className={styles.container}>
        <Metatags title={post.title} description={post.title} />
        <section>
          <PostContent post={post} />
        </section>
        <aside className='card'>
          <p>
            <strong>{post.heartCount || 0 } {post.heartCount ? '💙' : '🤍'} </strong>
          </p>
          <AuthCheck fallback={
              <Link href="/enter">
                <button>💗 Sign Up</button>
              </Link>
            }>
              <HeartButton postRef={postRef} />
          </AuthCheck>
          
          {currentUser?.uid == post.uid && 
            (<Link href={`/admin/${post.slug}`}>
            <button className='btn-blue'>
              Edit Post
            </button>
          </Link> )
          }
       

        </aside>
     
      </main>
    )
  }
