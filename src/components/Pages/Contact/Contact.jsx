import React from 'react'
import ContactForm from './ContactForm';
import style from './Contact.module.css'

export default function Contact() {
  return (
    <>
    <div className='contact'>
        <div className="container">
        
            <div className="heading">
            
                    <p className={style.mt}>Contact Us</p>
                    <h2>Get Helps & Friendly Support</h2>                  
            </div>
            <ContactForm/>
        </div>
    </div>
    </>
  )
}
