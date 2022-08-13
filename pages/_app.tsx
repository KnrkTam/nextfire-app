import "../styles/globals.css";
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import { NextUIProvider } from '@nextui-org/react';



function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <NextUIProvider>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </NextUIProvider>

  );
}

export default MyApp;
