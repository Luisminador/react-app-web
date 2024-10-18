import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus unde, delectus ducimus, earum neque quibusdam ipsam repellendus ullam rerum accusantium fugiat, magnam sunt dolore deserunt. Fugit quisquam modi molestiae eaque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus unde, delectus ducimus, earum neque quibusdam ipsam repellendus ullam rerum accusantium fugiat, magnam sunt dolore deserunt. Fugit quisquam modi molestiae eaque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus unde, delectus ducimus, earum neque quibusdam ipsam repellendus ullam rerum accusantium fugiat, magnam sunt dolore deserunt. Fugit quisquam modi molestiae eaque?</p>
      </div>
    </div>
  )
}

export default About
