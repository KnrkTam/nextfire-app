// import * as React from "react";

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../lib/context";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import {
  GitHubIcon,
  ExternalLinkIcon,
  HackerNewsIcon,
  NewsletterIcon,
  WritingIcon,
  LinkedInIcon,
} from "../Icons";

// Top navbar
export default function Sidebar() {
  const { user, username } = useContext(UserContext);
  const router = useRouter();
  const profileParams = ["/aboutme", "/experience", "/projects"];

  return (
    <nav className="absolute fixed top-0 bottom-0 -translate-x-full 3xl:w-80 z-30 flex h-full max-h-screen min-h-screen w-3/4 flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-white pb-10 transition duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-900 sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative lg:z-auto lg:w-56 lg:translate-x-0 lg:bg-gray-50 lg:dark:bg-gray-900 2xl:w-72">
      <div className="filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900 min-h-[48px]">
        <div className="flex flex-none items-center justify-between">
          <span className="flex items-center space-x-3">
            <h2 className="text-primary transform-gpu text-sm font-bold ml-3 dark:text-gray-200">
              DevJourney
            </h2>
          </span>
        </div>
      </div>
      <div className="flex-1 p-3 space-y-1">
        <ul className="space-y-1">
          <li className="flex items-stretch space-x-1">
            <Link href="/">
              <a className="flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200">
                <span className="flex items-center justify-center w-4">
                  <HomeIcon />
                </span>
                <span className="flex-1">Home</span>
              </a>
            </Link>
          </li>
          <li className="flex items-stretch space-x-1">
            <Link href="/testing">
              <a className="flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200">
                <span className="flex items-center justify-center w-4">
                  <ConstructionIcon />
                </span>
                <span className="flex-1">Testing</span>
              </a>
            </Link>
          </li>
          {username && (
            <li className="flex items-stretch space-x-1">
              <Link href="/admin">
                <a className="flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200">
                  <span className="flex items-center justify-center w-4">
                    <HackerNewsIcon />
                  </span>
                  <span className="flex-1">Write post</span>
                </a>
              </Link>
            </li>
          )}
        </ul>
        <ul className="space-y-1">
          <h4 className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-900 text-opacity-40 dark:text-white">
            Me
          </h4>
          <li className="flex items-stretch space-x-1">
            <a
              href="https://github.com/KnrkTam"
              className="flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200"
            >
              <span className="flex items-center justify-center w-4">
                <GitHubIcon />
              </span>
              <span className="flex-1">GitHub</span>
              <span className="flex items-center justify-center w-4 text-black text-opacity-40 dark:text-white">
                <ExternalLinkIcon />
              </span>
            </a>
          </li>
          <li className="flex items-stretch space-x-1">
            <a
              href="https://kenricktam.vercel.app/"
              className="flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200"
            >
              <span className="flex items-center justify-center w-4">
                <WritingIcon />
              </span>
              <span className="flex-1">Resume</span>
              <span className="flex items-center justify-center w-4 text-black text-opacity-40 dark:text-white">
                <ExternalLinkIcon />
              </span>
            </a>
          </li>
          <li className="flex items-stretch space-x-1">
            <a
              href="https://www.linkedin.com/in/kenrick-tam/"
              className="flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200"
            >
              <span className="flex items-center justify-center w-4">
                <LinkedInIcon />
              </span>
              <span className="flex-1">Linkedin</span>
              <span className="flex items-center justify-center w-4 text-black text-opacity-40 dark:text-white">
                <ExternalLinkIcon />
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="filter-blur sticky bottom-0 z-10 flex items-center justify-between space-x-3 border-t border-gray-150 bg-white bg-opacity-80 p-2 dark:border-gray-800 dark:bg-gray-900 dark:bg-opacity-60">
        {!user && (
          <Link href="/enter">
            <button className="flex w-full space-x-2 flex-none items-center justify-center cursor-pointer leading-none transition-all font-semibold px-4 py-2 text-sm opacity-100 rounded-md text-gray-700 hover:text-gray-1000 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white">
              Sign in
            </button>
          </Link>
        )}
        {/* {username && (
          <>
            <div style={{ display: "flex" }}>
              {!profileParams.includes(router.pathname) && <AboutMeButton />}
              <WritePostButton />
              <SignOutButton />
            </div>
          </>
        )} */}
        {username && (
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
            <button
              className="flex w-full flex-auto items-center justify-center cursor-pointer leading-none transition-all font-semibold px-4 py-2 text-sm opacity-100 rounded-md text-gray-700 hover:text-gray-1000 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white"
              onClick={() => auth.signOut()}
            >
              Sign out
            </button>
          </>
        )}
      </div>
      {/* user is signed-in and has username */}
    </nav>
  );
}

// Sign out button
function SignOutButton() {
  return (
    <button
      className="transition ease-in-out hover:scale-110"
      onClick={() => auth.signOut()}
    >
      Sign Out
    </button>
  );
}

// Sign out button
function AboutMeButton() {
  return (
    <a href="https://kenricktam.vercel.app">
      <button className="btn-purple transition ease-in-out hover:scale-110  hover:bg-indigo-500 duration-300 ">
        About Me
      </button>
    </a>
  );
}

function WritePostButton() {
  return (
    <Link href="/admin">
      <button className="btn-blue transition ease-in-out hover:scale-110">
        Write Posts
      </button>
    </Link>
  );
}
