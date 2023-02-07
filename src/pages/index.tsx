import { Inter } from '@next/font/google'
import Heading from './Coin_Head'
import React from 'react'
import Treasury_label from './Treasury_Table'
import Graph_Table from './Coin_table'
import Chart from './Bar_graph'
import { Container } from '@mui/material'
import NFT_Head from './Bar_Head'
import Footer from './Footer'
import Header from './Header'
import SearchResult from './Account_Details'
import Token from './token'
import Date_fetch from './Date_fetch'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>

      <Header />

      <Container >
        <SearchResult />
        <NFT_Head />
        <Chart />
        <Treasury_label />
        <Heading />
        <Graph_Table />
      </Container>
      {/* <Token />
      <Date_fetch /> */}
      <Footer />
    </React.Fragment>

  )
}
