import React from 'react'
import style from './Contact.module.css'

export default function ContactForm() {
  return (
    <>
    <form className={style.form}>
            <h4>Fillup The Form</h4> <br />
            <input className='mb-3'   type='text' placeholder='Name' />
            <input className='mb-3'   type='text' placeholder='Email' />
            <input className='mb-3' type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button className={style.btn}>Submit Request</button>
          </form>
    </>
  )
}
