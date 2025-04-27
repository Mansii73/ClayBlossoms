import React from 'react'
import Header from '../components/Header'
import App from '../components/App'
import Card from '../components/Card'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <div><Header/></div>
      <div><App/></div>
      <div><Card/></div>
      <div><Footer/> </div>
    </div>
  )
}

export default Home;