import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <h2>Tech News</h2>
        <h2>Main Story</h2>
        <p><Link href="news/dotnewtabaddssearchsupport.html"><a>Dot New Tab Page adds search support</a></Link></p>
        <h2>Other Stories</h2>
         <p><Link href="news/neuralinkv2.0friday.html">Elon Musk is going to show off Neuralink version 2 today</Link></p>
         <p><Link href="news/amazonhasannouncedhalo.html"><a>Amazon has announced Halo</a></Link></p>
        <h2>All Stories</h2>
        <p><Link href="news/allstories.html"><a>All my tech news stories</a></Link></p>
      </main>
      <Footer></Footer>
    </div>
  )
}