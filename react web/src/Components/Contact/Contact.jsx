import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore hic quidem ab corporis nemo, nihil earum? Ab sit provident nostrum! Dolor eum molestias, quas quibusdam ipsum repudiandae a ratione.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@GreatStack.dev
            </li>
            <li><img src={phone_icon} alt="" />+46 70-123 45 67</li>
            <li><img src={location_icon} alt="" />Testgatan 36, Stockholm 160 00</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
      </div>
    </div>
  )
}

export default Contact
