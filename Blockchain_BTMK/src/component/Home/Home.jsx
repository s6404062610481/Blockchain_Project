import React from 'react'
import './Home.css'
import Image from '../Image/bg-home2.jpg'
import Navbar from '../Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div>
      
        <Navbar/>
        <div className="main">
        <img src={Image} alt="" />
            <div className="main-home-text">
                <h2>WE PROVIDE</h2>
                <h1>FULL MEDICAL CARE</h1>
            </div>
            <div className="main-home-box">
                <h3>Explore our service <FontAwesomeIcon className='icon-right' icon={faArrowRightLong} /></h3>
            </div>
        </div>

    </div>
  )
}

export default Home
