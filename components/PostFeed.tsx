
import Link from 'next/link';

export default function PostFeed({ posts, admin = false }) {
  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

function PostItem({ post, admin = false }) {
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className="card">
    

      <Link href={`/${post.username}/${post.slug}`}>
        <h2>
          <a className='font-bold text-ellipsis overflow-hidden ...'>{post.title}</a>
        </h2>
      </Link>
      By <Link href={`/${post.username}`}>
        <a className='text-info hover:text-blue-500'>
          <strong>@{post.username}</strong>
        </a>
      </Link>
      <footer>
        <span>
          {wordCount} words. {minutesToRead} min read
        </span>
        <span className="push-left">💗 {post.heartCount || 0} Hearts</span>
      </footer>

      {/* If admin view, show extra controls for user */}
      {admin && (
        <>
          <Link href={`/admin/${post.slug}`}>
            <h3>
              <button className="btn-blue">Edit</button>
            </h3>
          </Link>

          {post.published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
        </>
      )}
    </div>
  );
}