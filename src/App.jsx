import React from 'react'
import Header from "./components/Header/Header.jsx"
import Navbar from './components/Navbar/Navbar.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Mid from './components/Mid/Mid.jsx';
import Lemo from './components/lemo/Lemo.jsx';

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Header />
      <Testimonial />
      <Mid />
      <Lemo/>
    </div>
  )
}

export default App