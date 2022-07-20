// import styles from '../styles/globals.css'
import Link from 'next/link'
import Loader from '../components/Loader'
import { toast } from 'react-hot-toast'


export default function Home() {
  return (
   <>
    <Link href="/kenrick">
      <a>Kenrick's Profile</a>
      </Link>
      <Loader show />
      <button onClick={() => toast.success('hello toast')}>
        Toast Me
      </button>
      <button onClick={() => toast.error('Bye toast', {position: "bottom-center" } )}>
        Don't Toast Me
      </button>
   </> 
  )
}
