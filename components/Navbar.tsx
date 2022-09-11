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
    <nav className="h-full min-h-screen max-h-screen absolute flex z-30 bg-gray-300 w-3/4 lg:w-56 md:w-1/3 sm:w1/2">
      <ul>
        <li>
          <Link href="/">
            {/* <button className="bg-blue-500 text-white transition delay-150 ease-in-out duration-300 hover:bg-violet-500"> */}
            <span className="filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900 font-bold text-black">
              DevJourney by Kenrick Tam
            </span>

            {/* </button> */}
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
              <div style={{ display: "flex" }}>
                {!profileParams.includes(router.pathname) && <AboutMeButton />}
                <WritePostButton />
                <SignOutButton />
              </div>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img
                  className="rounded-full transition ease-in-out hover:scale-110 skeleton"
                  src={user?.photoURL}
                  referrerPolicy="no-referrer"
                />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue transition hover:scale-110">
                Log in
              </button>
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

