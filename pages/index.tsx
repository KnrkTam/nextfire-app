import Loader from '../components/Loader'
import PostFeed from '../components/PostFeed';
import { firestore, fromMillis, postToJSON } from '../lib/firebase';
import { useState } from 'react';
import Metatags from '../components/Metatags';

// Max post to query per page
const LIMIT = 3;

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT);

  const posts = (await postsQuery.get()).docs.map(postToJSON);

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);

  const [postsEnd, setPostsEnd] = useState(false);

  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];

    const cursor = typeof last?.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

    const query = firestore
      .collectionGroup('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(cursor)
      .limit(LIMIT);

    const newPosts = (await query.get()).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };

  return (
     <main>
        <Metatags title={posts.title} description={posts.title} />

        <div className="card card-info">
            <p>Welcome! This app is built with Next.js and Firebase and is loosely inspired by Fireship.io's online tutorials.</p>
            <p>In this app, you are welcome to explore the below features:</p>
              <ul>
                <li>
                  Sign up for an 👨‍🎤 account
                </li>
                <li>
                  ✍️ write posts
                </li>
                <li>
                  💞 heart content created by other users
                </li>
              </ul>
                <p>All public content is server-rendered and search-engine optimized.</p>
          </div>
        <PostFeed posts={posts} admin={false} />

        {!loading && !postsEnd && <button onClick={getMorePosts}>Load more</button>}

        <Loader show={loading} />

        {postsEnd && 'You have reached the end!'}
      </main>

  );

}