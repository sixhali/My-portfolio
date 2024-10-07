import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import ScrollSpy from "react-ui-scrollspy";
import About from './Components/About/About';
import MyTools from './Components/My_Tools/MyTools';
import MyProje from './Components/MyProje/MyProje';
import Mycontact from './Components/myContact/myContact';
import Darkmode from './Components/Common/DarkMode/DarkMode';
function App() {

  const [isDarkMode,setDarkMode]=useState(true)

  const toggleDarkMode = (checked) => {
    console.log(checked); 
    setDarkMode(checked);
  };

  return (
    <ScrollSpy>
      <Darkmode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Header/>
      <Banner id="home" isDarkMode={isDarkMode}/>
      <About  id="about" isDarkMode={isDarkMode}/>
      <MyTools id="mytools" isDarkMode={isDarkMode}/>
      <MyProje id="myproje" isDarkMode={isDarkMode}/>
      <Mycontact id="contact" isDarkMode={isDarkMode}/>
    </ScrollSpy>
  )
}

export default App