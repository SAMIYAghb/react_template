import React from 'react'

import style from'./Landing.module.css';

export default function Landing() {
  return<>
  <div className={style.landing}>
    <div className="container">
        <div className={style.text}>
            <h1 className="">Search Your Next Home</h1>
            <p>Find New & Featured Property Located In Your Local City.</p>
        </div>
        <form className={style.form1}>
            <div className='box'>
              <span  className='ps-4'>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span  className='ps-4'>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span  className='ps-4'>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h5 className='ps-4'>Advance Filter</h5>
            </div>
            <button className={style.btn1}>
              <i className='fa fa-search'></i>
            </button>
          </form>
    </div>

  </div>
  
  </>
  
}
