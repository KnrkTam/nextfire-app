import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    // colors: {...},
  },
});

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <NextUIProvider theme={darkTheme}>
      <UserContext.Provider value={userData}>
          <Navbar />
          <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </NextUIProvider>
  );
}

export default MyApp;
