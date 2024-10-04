import React from 'react'
import MyProjeModule from './MyProje.module.css'
import myProje1 from '../../assets/MyProje_1.png';
import myProje2 from '../../assets/MyProje_2.jpg';
import myProje3 from '../../assets/MyProje_3.jpg';
import myProje4 from '../../assets/MyProje_4.png';
import myProje5 from '../../assets/MyProje_5.png';
import myProje6 from '../../assets/MyProje_6.png';



function MyProje() {
  return (
    <div id='myproje'>
        <div className={MyProjeModule.MyProjeBoxs}>
           <h1>My Proje</h1>
            <div className={MyProjeModule.MyProjeBox}>
                <a href="#"><img src={myProje1} width={390}/></a>
                <a href="#"><img src={myProje2} width={416}/></a>
                <a href="#"><img src={myProje3} width={400}/></a>
                <a href="#"><img src={myProje4} width={416}/></a>
                <a href="#"><img src={myProje5} width={416}/></a>
                <a href="#"><img src={myProje6} width={410}/></a>
            </div>

        </div>
    </div>
  )
}

export default MyProje