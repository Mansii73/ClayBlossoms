import React from 'react'
import Navbar from '../components/Navbar';
import App from '../components/App'
import Card from '../components/Card'


const Home = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><App/></div>
      <div><Card/></div>
      
    </div>
  )
}

export default Home;