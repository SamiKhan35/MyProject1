import React from 'react'
import Header from "./components/Header/Header.jsx"
import Navbar from './components/Navbar/Navbar.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Mid from './components/Mid/Mid.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <Testimonial />
      <Mid/>
    </div>
  )
}

export default App