import Link from 'next/link'
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';


// Top navbar
export default function Navbar() {

  const { user, username } = useContext(UserContext)

  // const user = null;
  // const username = null;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Cool App</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL}  />
              </Link>
            </li>
            <li>
              <SignOutButton />
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}