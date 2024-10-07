import React, { useState } from 'react'
import HeaderModle from './Header.module.css'
import usePersonalData from '../../Hooks/usePersonalData';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import myLogo from '../../assets/MyLogoText.png';
import Mobilenav from '../Mobile/MobileNav/MobileNav';
import My_cv from '../../assets/MyCv.pdf';



function Header() {
  const data = usePersonalData()
  const links = ['home' , 'about' ,'mytools','myproje', 'contact ']
  const [showMenu , setShowMenu] = useState(false)
  const [activeLink,setActiveLink] = useState('home')

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  const handleLinkClick = (link) => {
    setActiveLink(link); 
  };

  function downloadCv(){
    const link = document.createElement('a')
    link.href= {My_cv}
    link.download = 'myCv.pdf'
    link.click()
  }

  return (
    <header className={HeaderModle.Header}>
      <div className='Logo'><img  src={myLogo} alt="" className={HeaderModle.Logotext} /></div>
     <nav className={HeaderModle.Navigation}>
       <ul>
          {links.map((link , id)=>{
           return <a key={id} href={`#${link}`}
           onClick={()=>handleLinkClick(link)}
           className={activeLink === link ? HeaderModle.activeLink : ''}>{link}</a>
          })}
       </ul>
      <div  className={HeaderModle.Bars} onClick={toggleMenu}>
        <HiMiniBars3BottomRight/>
      </div>
       <Mobilenav showMenu={showMenu} toggleMenu={toggleMenu} onClick={()=>setShowMenu(true)}/>
     </nav>
     <button className={HeaderModle.CvDowlandbtn} onClick={downloadCv}>My Cv Download</button>

    </header>
  )
}

export default Header