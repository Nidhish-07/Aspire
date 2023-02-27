import React from 'react'

import Showcase from '../components/online-tution/Showcase'
import HowDoesItWork from '../components/online-tution/HowDoesItWork'
import Testimonials from '../components/online-tution/Testimonials'
import Footer from '../components/Footer'


const OnlineTution = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">


      

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
       
        <Showcase />
        <HowDoesItWork />

        <Testimonials />
     
      </main>

      
      {/*  Site footer */}
      <Footer />

    </div>
  )
}

export default OnlineTution