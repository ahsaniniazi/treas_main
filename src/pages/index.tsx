import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Heading from './holding_head'
import New from './new'
import React from 'react'
import Treasury_label from './Treasury_label'
import Graph_Table from './graphe_table'
import Chart from './main_graph'
import RAdial from './radial_cahrt'
import { Container } from '@mui/material'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <Container>
        <Chart />
        <Treasury_label />
        <Heading />
        {/* <RAdial /> */}
        <Graph_Table />
      </Container>
    </React.Fragment>

  )
}
