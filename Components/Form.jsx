import React from 'react'
import Button from './Button'
import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"

function Form() {
  return (
    <section className='formm'>
        <div className='form_item'>
            <div className='top_btn'>
             <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
             <Button text="VIA CALL" icon={<FaPhoneAlt/>} />
            </div>
            
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail/>} />
            <form className='form_c'>
                <div className='form_container'>
                  <label>Name</label>
                  <input type='text' name='name' />
                </div>
                <div className='form_container'>
                  <label>E-Mail</label>
                  <input type='email' name='email' />
                </div>
                <div className='form_container'>
                  <label>TEXT</label>
                  <textarea name='text' rows="5"/>
                </div>
                <Button text="SUBMIT" />
            </form>
        </div>
        <div className='form_image'>
            <img src='service24_7.png' alt='image' height="100%" />
        </div>
    </section>
  )
}

export default Form