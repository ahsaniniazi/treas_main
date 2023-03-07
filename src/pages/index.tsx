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
import Date_fetch from './Date_fetch'
import Static from './coin_static'
import { Box } from '@mui/system'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <div className='bg-[#FFFFFF]'>

      <Header />

      <Box 
      paddingTop="20px" 
      paddingLeft={{ xs:'28px' , md:"136px", lg: '136px'}} 
      paddingRight={{ xs:'20px' , md:"136px", lg: '136px'}}
      >

        <SearchResult />
        <NFT_Head />
        <Chart />
        <Treasury_label />
        <Heading />
        {/* <Graph_Table /> */}
        <Static />
      </Box>

      {/* <Date_fetch /> */}
      {/* <Token /> */}
      <Footer />
      </div>
    </React.Fragment>

  )
}
