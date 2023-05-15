import React from 'react'
import style from './footer.module.css';
import{footer} from './../../data/Data'

export default function Footer() {
  return (
    <>
    <div className={style.cont}>
    <div className="container ">
        <div className="d-flex justify-content-between">
            <div className="">
                <h2>Do You Have Questions?</h2>
                <p>We'll help you to grow your career and growth.</p>
            </div>
            <div className="">
                <button className={style.btn2}>
                Contact Us Today
                </button>
            </div>
            
        </div>
    </div>

    </div>
    <div className={style.footer}>
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-lg-5">
                    <img className={style.footerimg} src='../images/logo-light.png' alt="" />
                    <h4>Do You Need Help With Anything?</h4>
                    <p>Receive updates hot deals, tutorials, month</p>
                </div>


{
    footer.map((item, index)=>(
        <div key={index}className="col">
                <h6>{item.title}</h6>

                <ul>
                {
                    item.text.map((val,index)=>(
                       <li key={index}>{val.list}</li>


                    ))
                }
                </ul>
        </div>
    ))
}
                

            </div>
            <div className='legal'>
        <span>© 2023 SAMIYA BRD.</span>
      </div>
        </div>
        
    </div>
    </>
  )
}
