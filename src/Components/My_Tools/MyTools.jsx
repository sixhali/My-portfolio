import React from 'react'
import MyToolsModule from './MyTools.module.css';
import ApiImage from '../../assets/api.png'
import githubImage from '../../assets/github.png';
import restApiImage from '../../assets/RestApi.png';
import tailwindLogo from '../../assets/TalwindLogo.png';
import bootstrapLogo from '../../assets/BootstrapLogo.png';
import materialUiLogo from '../../assets/MatrialUILogo.png';

function MyTools() {
  return (
    <div className={MyToolsModule.MyToolsContainer} id='mytools'>
        <h1>Technologies & Tools</h1>
        <div className={MyToolsModule.MyToolsBoxs}>
         <div className={MyToolsModule.MyToolsBox}>
             <h3>01</h3>  
             <img src={ApiImage} alt="" />
             <h1>Axios/Fetch</h1>
         </div>
         <div className={MyToolsModule.MyToolsBox}>
             <h3>02</h3>  
             <img src={githubImage} alt="" />
             <h1>Git/Github</h1>
         </div>
         <div className={MyToolsModule.MyToolsBox}>
             <h3>03</h3>  
             <img src={restApiImage} alt="" />
             <h1>Rest API</h1>
         </div>
         <div className={MyToolsModule.MyToolsBox}>
             <h3>04</h3>  
             <img src={tailwindLogo} alt="" />
             <h1>Tailwind CSS</h1>
         </div>
         <div className={MyToolsModule.MyToolsBox}>
             <h3>05</h3>  
             <img src={bootstrapLogo} alt="" />
             <h1>Bootstrap</h1>
         </div>
         <div className={MyToolsModule.MyToolsBox}>
             <h3>06</h3>  
             <img src={materialUiLogo} alt="" />
             <h1>Material UI</h1>
         </div>
        </div>
    </div>
  )
}

export default MyTools