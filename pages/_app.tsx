import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";
import { createTheme, NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
      <UserContext.Provider value={userData}>
        <div className="flex w-full relative h-full min-h-screen">
          <Sidebar />
          <div className="m-auto">
            <div className="filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900"></div>
            <Component {...pageProps} />
          </div>
        </div>

        <Toaster />
      </UserContext.Provider>
  );
}

export default MyApp;
