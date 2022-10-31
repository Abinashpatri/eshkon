import React from 'react'
import CustomizedAccordions from '../components/Accordion'
import Charts from '../components/Charts'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'



const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Charts/>
      <Slider/>
      <CustomizedAccordions/>
    </div>
  )
}

export default Dashboard