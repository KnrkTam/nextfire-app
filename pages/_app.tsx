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
      <div className="relative flex h-full min-h-screen w-full">
        <Sidebar />
        <div className="flex m-auto">
          <Component {...pageProps} />
        </div>
      </div>

      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
