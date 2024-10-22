import { getUserWithUsername, postToJSON } from '../../lib/firebase';
import PostFeed from '../../components/PostFeed';
import UserProfile from '../../components/UserProfile';
import Metatags from '../../components/Metatags';

export async function getServerSideProps( {query} ){
  const { username } = query;
  const userDoc = await getUserWithUsername(username);

  if(!userDoc) {
    return {
      notFound: true,
    };
  }
  // JSON serializable data
  let user = null;
  let posts = null;
  
  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(5);
    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    props: { user, posts },
  }
}

export default function UserProfilePage({ user, posts }) {

    return (
      <main>
        <Metatags title={`${user.username} | Dev Journey`}/>
        <UserProfile user={user}/>
        <PostFeed posts={posts} />
      </main>
    )
  }