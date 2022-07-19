/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css'
import Link from '../node_modules/next/link'
import Loader from '../components/Loader'


export default function Home() {
  return (
   <>
    <Link href="/kenrick">
      <a>Kenrick's Profile</a>
      </Link>
      <Loader show />
   </> 
  )
}
