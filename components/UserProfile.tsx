export default function UserProfile({ user }) {
  return (
    <div className="box-center">
        <img src={user?.photoURL} className="card-img-center" referrerPolicy="no-referrer" />
        <p>
            <i>@{user?.username}</i>
        </p>
        <h1>{user?.displayName}</h1>
    </div>
  )
}