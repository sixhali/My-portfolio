import React from 'react'
import AboutModule from './About.module.css'
import MePhoto from '../../assets/MePhotoAbout.png';



function About({isDarkMode}) {
  return (
    <div className={AboutModule.Container} id='about'>
        <h1 style={{ color: isDarkMode ? '#fff' : '#000' }}>About me</h1>
        <div className={AboutModule.Content}>
            <img src={MePhoto} alt="" width={300} />
            <div className={AboutModule.Text}>
               <p style={{ color: isDarkMode ? '#fff' : '#000' }}>
                 I am a passionate and motivated Frontend Developer with a 
                 strong foundation in modern web technologies.
                 Although I am at the start of my professional journey,
                 I have spent months mastering JavaScript, React.js, TypeScript,
                 and other frontend tools through intensive learning and real-world projects.
                 I am eager to bring fresh ideas and energy to impactful teams. </p>
             <p style={{ color: isDarkMode ? '#fff' : '#000' }}>
               My love for frontend development drives me to constantly evolve and refine my skills. 
               Despite not having formal work experience,
               my dedication is evident in the projects I’ve built, 
               which reflect creativity, precision, and a commitment to user-centered design.</p>
               <div className={AboutModule.AboutSkills}>
                <div className={AboutModule.AboutSkill} style={{ color: isDarkMode ? '#fff' : '#000' }}>
                   <p>HTML & CSS</p>
                   <p>JavaScript</p>
                   <p>TypeScript</p>
                   <p>React Js</p>
                   <p>Next Js</p>
                   <p>Python</p>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default About