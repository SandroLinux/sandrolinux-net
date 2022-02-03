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
      <h2>Why I Created This Site</h2>
      <p>I created this website because it is a good way to learn html and share news about my channels</p>
      </main>
      <Footer></Footer>
    </div>
  )
}
