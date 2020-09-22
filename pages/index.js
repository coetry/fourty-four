import Head from 'next/head'
import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [color, setColor] = useState('rgb(0,0,0)')

  useEffect(() => {
    setInterval(() => setColor(getRandomColor()), 1000)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>44</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{color}}>44</h1>
      </main>

      <style jsx>{`
        main {
          border: 5px solid magenta;
          width: 256px;
          height: 256px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h1 {
          font-size: 64px; 
          font-family: monospace;
        }
      `}</style>
    </div>
  )
}

function getRandomColor() {
   let r = getRandomRGBValue() 
   let g = getRandomRGBValue()
   let b = getRandomRGBValue()

   return `rgb(${r},${g},${b})`
}

function getRandomRGBValue() {
  return Math.floor(Math.random() * 265)
}