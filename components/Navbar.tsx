import Link from 'next/link'
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router'


// Top navbar
export default function Navbar() {

  const { user, username } = useContext(UserContext)
  const router  = useRouter();
  const profileParams = ['/aboutme', '/experience','/projects'];

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo transition ease-in-out hover:bg-gradient-to-r from-[#00ff8d] to-[#00dcff] hover:scale-110">DevJourney</button>
          </Link>
        </li>
        {!username && (
          <li className="push-left">
            <div>
              {!profileParams.includes(router.pathname) && <AboutMeButton />}
            </div>
          </li>
        )}
      
        {/* user is signed-in and has username */}

        {username && (
          <>
            <li className="push-left">
              <div style={{display: 'flex'}}>
              {!profileParams.includes(router.pathname) && <AboutMeButton />}
              <WritePostButton />
              <SignOutButton />
              </div>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img className="rounded-full transition ease-in-out hover:scale-110 skeleton" src={user?.photoURL} referrerPolicy="no-referrer" />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue transition hover:scale-110">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

// Sign out button
function SignOutButton() {
  return <button className="transition ease-in-out hover:scale-110" onClick={() => auth.signOut()}>Sign Out</button>;
}

// Sign out button
function AboutMeButton() {
  return (
    <a
      href="https://kenricktam.vercel.app">
      <button className="btn-purple transition ease-in-out hover:scale-110  hover:bg-indigo-500 duration-300 ">
        About Me
      </button>
    </a>
  );
}

function WritePostButton() {
  return  <Link href="/admin">
  <button className="btn-blue transition ease-in-out hover:scale-110">Write Posts</button>
</Link>
}

