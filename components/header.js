import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import layout from '../components/layout.js'

export default function Header() {
  return (
    <html lang="en">
    <div className={layout.container}>
      <Head>
        <title>Sandro Linux</title>
        <meta name="description" content="The official site of Sandro Linux" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.navbar}>
       <Link href="../../">
       <a class="active">Home</a>
       </Link>
       <Link href="news">
       <a>News</a>
       </Link>
       <Link href="contactme">
       <a>Contact</a>
       </Link>
       <Link href="aboutthiswebsite">
       <a>About</a>
       </Link>
       <Link href="otherstuff">
       <a>Other Stuff</a>
       </Link>
       </div>
    </div>
    </html>
  )
}
