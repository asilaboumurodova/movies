import React from 'react'
import Upcoming from "@/components/Upcoming";
import Slider from '../components/Slider';
function Home() {
  return (
    <>
        <Upcoming/>
        <Slider type="movie"/>
        <Slider type="tv"/>
    </>
  )
}

export default Home