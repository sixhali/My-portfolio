import React from 'react'
import MyProjeModule from './MyProje.module.css'
import myProje1 from '../../assets/MyProje_1.png';
import myProje2 from '../../assets/MyProje_2.png';
import myProje3 from '../../assets/MyProje_3.png';
import myProje4 from '../../assets/MyProje_4.png';



function MyProje({isDarkMode}) {
  return (
    <div id='myproje'>
        <div className={MyProjeModule.MyProjeBoxs}>
           <h1 style={{ color: isDarkMode ? '#fff' : '#000' }}>My Proje</h1>
            <div className={MyProjeModule.MyProjeBox}>
                <a href="https://susha-logostic-react-js.vercel.app/" target='_blank'><img src={myProje1} width={416}/></a>
                <a href="https://traveling-blog-website.vercel.app/" target='_blank'><img src={myProje2} width={416}/></a>
                <a href="https://baku-devs-figma-proje.vercel.app/" target='_blank'><img src={myProje3} width={416}/></a>
                <a href="https://archbaku-figma-proje.vercel.app/" target='_blank'><img src={myProje4} width={416}/></a>
            </div>

        </div>
    </div>
  )
}

export default MyProje