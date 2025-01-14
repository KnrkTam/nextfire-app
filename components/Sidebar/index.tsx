// import * as React from "react";

import { useContext, useRef } from "react";
import { UserContext, GlobalNavigationContext } from "../../lib/context";
import TitleBar from "./TitleBar";
import { SidebarNavigation } from "./Navigation";
import UserFooter from "./UserFooter";
import { SidebarOverlay } from "./Overlay";

// Top navbar
export default function Sidebar() {
  const { user, username } = useContext(UserContext);
  const { isOpen } = useContext(GlobalNavigationContext);
  const scrollContainerRef = useRef(null);
  let token: string | null;

  return (
    <>
      <nav
        ref={scrollContainerRef}
        className={`${
          isOpen
            ? "fixed inset-y-0 left-0 translate-x-0 shadow-lg"
            : "fixed -translate-x-full"
        } 3xl:w-80 z-30 flex h-full max-h-screen min-h-screen w-3/4 flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-white pb-10 transition duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-900 sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative lg:z-auto lg:w-56 lg:translate-x-0 lg:bg-gray-50 lg:dark:bg-gray-900 2xl:w-72`}
      >
        <TitleBar scrollContainerRef={scrollContainerRef} title="Kenrick Tam" />
        <SidebarNavigation token={user?.accessToken} />
        <UserFooter user={user} username={username} />
      </nav>
      <SidebarOverlay />
    </>
  );
}
