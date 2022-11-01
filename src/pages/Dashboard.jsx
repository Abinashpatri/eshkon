import React from 'react'
import CustomizedAccordions from '../components/Accordion'
import Chart from '../components/Chart'
import Charts from '../components/Charts'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import styled from 'styled-components'



const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ChartContainer>
        <Charts/>
        <Chart/>
      </ChartContainer>
      <Slider/>
      <CustomizedAccordions/>
    </div>
  )
}

export default Dashboard

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #E6E6E6;
`