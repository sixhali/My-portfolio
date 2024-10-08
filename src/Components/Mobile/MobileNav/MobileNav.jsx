import React, { useState } from 'react'
import MobileModle from './Mobile.module.css'
import { IoCloseSharp } from "react-icons/io5";
import My_cv from '../img/MyCv.pdf'; 


function Mobilenav({showMenu,toggleMenu,}) {
  const links = ['home' , 'about' , 'mytools', 'myproje', 'contact ']
  const [activeLink,setActiveLink] = useState('home')

  function handleLinkClick(link){
     setActiveLink(link)
  }
  
  return (
    <div>
         
       <nav className={`${MobileModle.MobileNav} ${showMenu ? MobileModle.show: MobileModle.hidden}`}>
            <div>
 
             <ul className={MobileModle.Links}>
              {links.map((link , id)=>{
               return <a key={id} href={`#${link}`}
               onClick={()=>handleLinkClick(link)}
               className={activeLink === link ? MobileModle.activeLink : ''}
               >{link}</a>
              })}
               <button className={HeaderModle.CvDowlandbtn} onClick={() => window.open(My_cv,'_blank')}>My Cv Download</button>             </ul>
             <IoCloseSharp className={MobileModle.CloseSharp} onClick={toggleMenu}/>
     
            </div>
           
        </nav>
    </div>
  )
}

export default Mobilenav