import React from 'react'
import { auth } from "../../lib/firebase";
import Link from 'next/link';


export default function UserFooter({user, username}) {
  return (
    <div className="filter-blur sticky bottom-0 z-10 flex items-center justify-between space-x-3 border-t border-gray-150 bg-white bg-opacity-80 p-2 dark:border-gray-800 dark:bg-gray-900 dark:bg-opacity-60">
      {!user && (
        <Link href="/enter">
          <button className="flex w-full space-x-2 flex-none items-center justify-center cursor-pointer leading-none transition-all font-semibold px-4 py-2 text-sm opacity-100 rounded-md text-gray-700 hover:text-gray-1000 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white">
            Sign in
          </button>
        </Link>
      )}
      {user && (
        <>
          <div className="flex-none w-1/4">
            <Link href={`/${username}`}>
              <img
                className="rounded-full transition ease-in-out hover:scale-110 skeleton"
                src={user?.photoURL}
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          <SignOutButton />
        </>
      )}
    </div>
  );

  // Sign out button
  function SignOutButton() {
    return (
      <button
        className="flex w-full flex-auto items-center justify-center cursor-pointer leading-none transition-all font-semibold px-4 py-2 text-sm opacity-100 rounded-md text-gray-700 hover:text-gray-1000 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    );
  }
}


