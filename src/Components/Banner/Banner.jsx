import React from 'react'
import BannerModulecss from './Banner.module.css'
import MyPhotoCricle from '../../assets/MePhoto.jpg'
import instagramIcon from '../../assets/instagram.png';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';



function Banner({isDarkMode}) {
  return (
    <div id='home' className={BannerModulecss.Container}>
        <img src={MyPhotoCricle} alt=""/>
        <div className={BannerModulecss.Text}>
          <p
        style={{ color: isDarkMode ? '#fff' : '#000' }}><span>I'm Sixhali Guliyev,<br/></span>
               frontend developer based in Azerbaijan.
            </p>
            <p style={{ color: isDarkMode ? '#fff' : '#000' }}>
             I am a frontend developer from Azerbaijan,
              continuously learning and building projects.
               I am passionate about creating responsive,
                modern websites and looking for opportunities to grow and contribute to exciting projects.
            </p>

        </div>
        <div className={BannerModulecss.Icons}>
            <a href="https://www.instagram.com/the_sixhali/" target='_blank'><img src={instagramIcon} alt=""/></a>
            <a href="https://github.com/sixhali" target='_blank'><img src={githubIcon} alt="" /></a>
            <a href="https://www.linkedin.com/in/shikhali-guliyev/" target='_blank'><img src={linkedinIcon} alt="" /></a>
        </div>
    </div>
  )
}

export default Banner