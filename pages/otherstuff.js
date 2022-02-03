import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
export default function Otherstuff() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <p>In the works!</p>
      </main>
      <Footer></Footer>
    </div>
  )
}
