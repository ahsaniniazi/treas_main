import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Heading from './home'
import New from './new'
import React from 'react'
import Treasury_label from './Treasury_label'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>treas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <New />
      <Treasury_label/>
    </div>

  )
}
