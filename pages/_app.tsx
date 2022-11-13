import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <div className="fixed flex h-full min-h-screen max-h-screen w-full top-0 ">
        <Sidebar />
        <div className="flex overflow-y-auto max-h-screen px-20">
          <Component {...pageProps} />
        </div>
      </div>

      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
