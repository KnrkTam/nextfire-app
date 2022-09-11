export default function Announcement() {
  return (
    <div className="card card-info shadow">
      <p className="text-l font-bold">
        Welcome! This app is built with Next.js and Firebase and is loosely
        inspired by various online tutorials.
      </p>
      <br />
      <p>In this app, you are welcome to explore the below features:</p>
      <ul className="list-disc ml-4 text-white font-bold">
        <li>Sign up or login for an 👨‍🎤 account with Google Authentication</li>
        <li>✍️ Write and edit posts</li>
        <li>💞 Heart content created by other users</li>
      </ul>
      <br />
      <p>All public content is server-rendered and search-engine optimized.</p>
    </div>
  );
}
