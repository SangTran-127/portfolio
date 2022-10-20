import React, { useContext } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'


import { Grid, useTheme } from '@mui/material'
import { ColorModeContext } from '../App'
import SangWave from '../assets/wave.png'
import iMac from '../assets/iMac.png'
import Design from '../assets/design.png'
import Code from '../assets/code.png'
import Consulting from '../assets/consulting.png'

import Project1 from '../assets/web1.png';
import Project2 from '../assets/web2.png';
import Project3 from '../assets/web3.png';
import Project4 from '../assets/web4.png';
import Project5 from '../assets/web5.png';
import Project6 from '../assets/web6.png';


interface HomeProps  {

}

const Home: React.FC<HomeProps> = (props : HomeProps) => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  return (
    <main className='home'>
        <section className='home__section-intro'>
          <nav className='home__section-intro__nav'>
            <h1 className='home__section-intro__nav__title'>Sang Tran</h1>
            <ul className='home__section-intro__nav__list'>
              <li className='home__section-intro__nav__list__item'>
                <BsFillMoonStarsFill id='star-icon' onClick={colorMode.toggleColorMode}/>
              </li>
              <li>
                <a href="" className='home__section-intro__nav__list__item__link'>Resume </a>
              </li>
            </ul>
          </nav>
          <div className='home__section-intro__intro'>
            <h2 className='home__section-intro__intro__name'>Tran Quang Sang</h2>
            <h3 className='home__section-intro__intro__job'>Front-end Developer</h3>
            <p className='home__section-intro__intro__description'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quis vel dolorum eum architecto natus non rem nostrum, totam ab! Natus fugit laborum reiciendis sed error esse temporibus neque doloremque?
            </p>
          </div>
          <div className='home__section-intro__logo'>
            <AiFillGithub/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          <div className='home__section-intro__img'>
              <img src={SangWave} alt="" className='home__section-intro__img__item'/>
          </div>
        </section>
        {/*  */}
        <section className='home__section-business'>
          <div className="home__section-business__content">
            <h3 className="home__section-business__content__title">
              Service I offer
            </h3>
            <p className='home__section-business__content__description'>
              Since the beginning of my journey as a sophomore and developer, I've done some <span style={{color: '#14b8a6'}}>project</span> with team and for my own. I can coding <span style={{color: '#14b8a6'}}>Back-end</span> as well.
            </p>
            <p className='home__section-business__content__description'>
              I offer from a wide range of services, including front-end, back-end and blockchain programming.
            </p>
          </div>
          <div className='home__section-business__offer'>
             <Grid container alignItems='flex-end' rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
              <Grid item xs={12} md={4}>
              <div className='home__section-business__offer__job'>
                <img src={Consulting} alt="" className='home__section-business__offer__job__item'/>
                <h3 className='home__section-business__offer__job__name'>
                  Languages
                </h3>
                <p className='home__section-business__offer__job__desc'>
                  {" "}
                  Building websites, designing applications, and ensuring overall user accessibility
                </p>
                <h4 className='home__section-business__offer__job__stack-intro'>Front-end stack I use</h4>
                <p className='home__section-business__offer__job__stack'>HTML/CSS</p>
                <p className='home__section-business__offer__job__stack'>ReactJS</p>
                <p className='home__section-business__offer__job__stack'>Typescript</p>
              </div>
              </Grid>
             <Grid item xs={12} md={4}>
             <div className='home__section-business__offer__job'>
                <img src={iMac} alt="" className='home__section-business__offer__job__item'/>
                <h3 className='home__section-business__offer__job__name'>
                  Front-end Developer
                </h3>
                <p className='home__section-business__offer__job__desc'>
                  {" "}
                  Building websites, designing applications, and ensuring overall user accessibility
                </p>
                <h4 className='home__section-business__offer__job__stack-intro'>Front-end stack I use</h4>
                <p className='home__section-business__offer__job__stack'>HTML/CSS</p>
                <p className='home__section-business__offer__job__stack'>ReactJS</p>
                <p className='home__section-business__offer__job__stack'>Typescript</p>
              </div>
             </Grid>
              <Grid item xs={12} md={4}>
              <div className='home__section-business__offer__job'>
                <img src={Code} alt="" className='home__section-business__offer__job__item'/>
                <h3 className='home__section-business__offer__job__name'>
                  Front-end Developer
                </h3>
                <p className='home__section-business__offer__job__desc'>
                  {" "}
                  Building websites, designing applications, and ensuring overall user accessibility
                </p>
                <h4 className='home__section-business__offer__job__stack-intro'>Front-end stack I use</h4>
                <p className='home__section-business__offer__job__stack'>HTML/CSS</p>
                <p className='home__section-business__offer__job__stack'>ReactJS</p>
                <p className='home__section-business__offer__job__stack'>Typescript</p>
              </div>
              </Grid>
             </Grid>
          </div>
          
         
        </section>
        <section className='home__section-project'>
            <div className="home__section-project__content">
              <h3 className="home__section-project__content__title ">Projects</h3>
              <p className="home__section-project__content__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quaerat culpa dolor. Quos rem, dignissimos vero porro error quo doloremque atque ratione distinctio, id architecto illo totam consequuntur. Delectus, distinctio.
              </p>
              <p className="home__section-project__content__offer">
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div className="home__section-project__show">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
                  <Grid item xs={12} md={6} lg={4}>
                    <div>
                      <img src={Project1} alt="" />
                    </div>
                  </Grid> 
                  <Grid item xs={12} md={6} lg={4}>
                    <div>
                      <img src={Project2} alt="" />
                    </div>
                  </Grid> 
                  <Grid item xs={12} md={6} lg={4}>
                    <div>
                      <img src={Project3} alt="" />
                    </div>
                  </Grid> 
                  <Grid item xs={12} md={6} lg={4}>
                    <div>
                      <img src={Project4} alt="" />
                    </div>
                  </Grid> 
                  <Grid item xs={12} md={6} lg={4}>
                    <div>
                      <img src={Project5} alt="" />
                    </div>
                  </Grid> 
                  <Grid item xs={12} md={6} lg={4}>
                    <div>
                      <img src={Project6} alt="" />
                    </div>
                  </Grid> 
                </Grid>
            </div>
        </section>
    </main>
  )
}


export default Home