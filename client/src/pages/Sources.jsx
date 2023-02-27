import React from 'react'
import Footer from '../components/Footer';

import Search from '../components/Components/SearchDiv/Search'
import Jobs from '../components/Components/JobDiv/Jobs'
const Job = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      
      {/* Login */}
      {/* <Login/> */}

      {/*  Page content */}
      <main class="p-20">

        {/*  Page sections */}
        <Search />

        <Jobs />

     
      </main>

      
      {/*  Site footer */}
      <Footer />

      <footer className="bg-gray-800 py-4">
    <div className="container mx-auto text-center text-white">
      &copy; 2023 Platform Name. All rights reserved.
    </div>
  </footer>

    </div>
  )
}

export default Job