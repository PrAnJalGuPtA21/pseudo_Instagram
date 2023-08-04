import React from 'react'
import image from './image.JPG'
import './home.css'
import Entry from './Entry'
import Footer from './Footer'
export default function Home() {
  return (<>
    <div className="container">
      <div className="left">
        <img src={image} />
      </div>
      <div className="right">
        <Entry />
      </div>
    </div>
    <div className="bottom">
      <Footer />
      <div className="footer2">
        <span>English (UK)   </span>
        <span> © 2023 Instagram from Meta</span>
      </div>
    </div>
  </>

  )
}
