import React from 'react'
import Navbar from '../components/Navbar';
import App from '../components/App';
import App from '../components/Home';
import App from '../components/About';
import App from '../components/Products';
import App from '../components/Contact';
import App from '../components/Signup';
import App from '../components/SingleProduct/:id';
import App from '../components/Cart';
import App from '../components/Error';
import App from '../components/GlobalStyle';
import App from '../components/Styled-components';
import App from '../components/ThemeProvider';



const Home = () => {
  return (
    <themeProvider theme={theme}>
    <div>
   
      <div><Navbar/></div>
      <div><Home/></div>
      <div><About/></div>
      <div><Products/></div>
      <div><App/></div>
      <div><Contact/></div>
      <div><SingleProduct/></div>
      <div><Cart/></div>
      <div><Error/></div>
      
    </div>
    </themeProvider>
  )
}

export default Home;