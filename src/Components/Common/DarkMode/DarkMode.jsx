import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState , useEffect} from 'react';
import './DarkMode.css'

const Darkmode = ({isDarkMode , toggleDarkMode}) => {
  useEffect(()=>{
      if (isDarkMode){
        document.body.classList.remove('dark-mode');
    }else{
        document.body.classList.add('dark-mode');
    }
  },[isDarkMode])

  return (
    <DarkModeSwitch className='darkodeicon' checked={isDarkMode} onChange={toggleDarkMode} size={30} sunColor='yellow'
    style={{backgroundColor:isDarkMode ? '#333':' #333', color: isDarkMode ? '#87CEEB' : '',
      borderRadius:"2px",
        
    }}/>  
  );
};

export default Darkmode ;