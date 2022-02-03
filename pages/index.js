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
        <h1 className={styles.title}>
          Hi I am Sandro Linux
        </h1>
      </main>
      <Footer></Footer>
    </div>
  )
}
