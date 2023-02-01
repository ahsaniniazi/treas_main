import { Inter } from '@next/font/google'
import Heading from './Coin_Head'
import React from 'react'
import Treasury_label from './Treasury_Flows'
import Graph_Table from './Coin_table'
import Chart from './Bar_graph'
import { Container } from '@mui/material'
import NFT_Head from './Bar_Head'
import Footer from './Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>

      <Container>
        <NFT_Head />
        <Chart />
        <Treasury_label />
        <Heading />
        <Graph_Table />
      </Container>
      <Footer />
    </React.Fragment>

  )
}
