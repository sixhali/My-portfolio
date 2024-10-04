import React from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import ScrollSpy from "react-ui-scrollspy";
import About from './Components/About/About';
import MyTools from './Components/My_Tools/MyTools';
import MyProje from './Components/MyProje/MyProje';
import Mycontact from './Components/myContact/myContact';
function App() {
  return (
    <ScrollSpy>
      <Header/>
      <Banner id="home"/>
      <About  id="about"/>
      <MyTools id="mytools"/>
      <MyProje id="myproje"/>
      <Mycontact id="contact"/>
    </ScrollSpy>
  )
}

export default App