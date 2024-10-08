import React, { useState } from 'react'
import HeaderModule from './Header.module.css'
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

  return (
    <header className={HeaderModule.Header}>
      <div className='Logo'><img  src={myLogo} alt="" className={HeaderModule.Logotext} /></div>
     <nav className={HeaderModule.Navigation}>
       <ul>
          {links.map((link , id)=>{
           return <a key={id} href={`#${link}`}
           onClick={()=>handleLinkClick(link)}
           className={activeLink === link ? HeaderModule.activeLink : ''}>{link}</a>
          })}
       </ul>
      <div  className={HeaderModule.Bars} onClick={toggleMenu}>
        <HiMiniBars3BottomRight/>
      </div>
       <Mobilenav showMenu={showMenu} toggleMenu={toggleMenu} onClick={()=>setShowMenu(true)}/>
     </nav>
     <button className={HeaderModule.CvDowlandbtn} onClick={() => window.open(My_cv,'_blank')}>My Cv Download</button>
    </header>
  )
}

export default Header