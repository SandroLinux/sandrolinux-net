import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import layout from '../components/layout.js'

export default function footer() {
  return (
    <footer className={styles.footer}>
        <p>Copyright &copy; 2022 Oscar Sanderson</p>
      </footer>
  )
}
