import React from 'react'
import './MyTools.css';
import ApiImage from '../../assets/api.png'
import githubImage from '../../assets/github.png';
import restApiImage from '../../assets/RestApi.png';
import tailwindLogo from '../../assets/TalwindLogo.png';
import bootstrapLogo from '../../assets/BootstrapLogo.png';
import materialUiLogo from '../../assets/MatrialUILogo.png';

function MyTools({isDarkMode}) {
  return (
    <div className='MyToolsContainer flex  justify-center  gap-10 flex-col items-center' id='mytools'>
        <h1 style={{ color: isDarkMode ? '#fff' : '#000' }} className='text-4xl m-10 font-bold'>Technologies & Tools</h1>
        <div className=' boxs flex flex-wrap gap-10 max-w-[800px] justify-center'>
         <div className='box flex flex-col items-center border-[2px solid  #fff] rounded-lg gap-10  duration-500 cursor-pointer hover:bg-[#531b0a] hover:scale-110  w-[220px] justify-center text-2xl p-10' 
         style={{ color: isDarkMode ? '#fff' : '#000',
            border: isDarkMode ? '2px solid #000':'2px solid #000'
         }}>
             <h3>01</h3>  
             <img src={ApiImage} alt="" />
             <h1 className=' font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>Axios/Fetch</h1>
         </div>
         <div className=' box flex flex-col items-center border-[2px solid  #fff] rounded-lg gap-10  duration-500 cursor-pointer hover:bg-[#531b0a] hover:scale-110  w-[220px] justify-center p-10' 
         style={{ color: isDarkMode ? '#fff' : '#000',
            border: isDarkMode ? '2px solid #000':'2px solid #000'
         }}>
             <h3>02</h3>  
             <img src={githubImage} alt="" />
             <h1 className=' text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>Git/Github</h1>
         </div>
         <div className=' box flex flex-col items-center border-[2px solid  #fff] rounded-lg gap-10  duration-500 cursor-pointer hover:bg-[#531b0a] hover:scale-110  w-[220px] justify-center text-2xl p-10'
         style={{ color: isDarkMode ? '#fff' : '#000',
            border: isDarkMode ? '2px solid #000':'2px solid #000'
         }}>
             <h3>03</h3>  
             <img src={restApiImage} alt="" />
             <h1 className=' font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>Rest API</h1>
         </div>
         <div className=' box flex flex-col items-center border-[2px solid  #fff] rounded-lg gap-10  duration-500 cursor-pointer hover:bg-[#531b0a] hover:scale-110  w-[220px] justify-center text-2xl p-10'
         style={{ color: isDarkMode ? '#fff' : '#000',
            border: isDarkMode ? '2px solid #000':'2px solid #000'
         }}>
             <h3>04</h3>  
             <img src={tailwindLogo} alt="" width={64} height={64}/>
             <h1 className=' font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>Tailwind CSS</h1>
         </div>
         <div className=' box flex flex-col items-center border-[2px solid  #fff] rounded-lg gap-10  duration-500 cursor-pointer hover:bg-[#531b0a] hover:scale-110  w-[220px] justify-center text-2xl p-10'
         style={{ color: isDarkMode ? '#fff' : '#000',
            border: isDarkMode ? '2px solid #000':'2px solid #000'
         }}>
             <h3>05</h3>  
             <img src={bootstrapLogo} alt="" width={95} height={95} />
             <h1 className=' font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>Bootstrap</h1>
         </div>
         <div className=' box flex flex-col items-center border-[2px solid  #fff] rounded-lg gap-10  duration-500 cursor-pointer hover:bg-[#531b0a] hover:scale-110  w-[220px] justify-center text-2xl p-10'
         style={{ color: isDarkMode ? '#fff' : '#000',
            border: isDarkMode ? '2px solid #000':'2px solid #000'
         }}>
             <h3>06</h3>  
             <img src={materialUiLogo} alt="" width={64} height={64} />
             <h1 className=' font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>Material UI</h1>
         </div>
        </div>
    </div>
  )
}

export default MyTools