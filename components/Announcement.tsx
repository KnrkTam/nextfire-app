export default function Announcement() {
  return (
    <div className="card card-info shadow text-md">
      <p className="text-lg font-bold">
        Hey I'm Kenrick. Welcome to my dev journey site!
      </p>
      <br />
      <p>
        I'm a fullstack developer located in Scarborough, Toronto. I'm
        working on freelance projects so feel free to inbox me for quotes and
        project inquires.
      </p>
      <p>
        Before coming back to Canada 🇨🇦, I designed and build CMS system and ERP
        planner at{" "}
        <a href="https://www.onesolution.com.hk/" className="hover:underline hover:text-blue-500">One Solution Limited</a> in
        Hong Kong 🇭🇰
      </p>
      <br></br>
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
