import Link from 'next/link'
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router'


// Top navbar
export default function Navbar() {

  const { user, username } = useContext(UserContext)
  const router  = useRouter();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Kenrick Tam</button>
          </Link>
        </li>
        {!username && (
          <li className="push-left">
            <div>
              {router.pathname !== '/aboutme' &&<AboutMeButton />}
            </div>
          </li>
        )}
      
        {/* user is signed-in and has username */}

        {username && (
          <>
            <li className="push-left">
              <div style={{display: 'flex'}}>
              {router.pathname !== '/aboutme' &&<AboutMeButton />}
              <WritePostButton />
              <SignOutButton />
              </div>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img className="rounded-full" src={user?.photoURL} referrerPolicy="no-referrer" />
              </Link>
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

// Sign out button
function AboutMeButton() {
  return   <Link href="/aboutme">
            <button className="btn-purple">About Me</button>
          </Link>;
}

function WritePostButton() {
  return  <Link href="/admin">
  <button className="btn-blue">Write Posts</button>
</Link>
}

