import React from 'react'
import {price} from './../../data/Data';
import style from './Price.module.css'

export default function PriceCard() {
  return (
    <>
    <div className="row">
                {
                    price.map((item, index)=>(
                        <div key={index} className="col-md-4 mb-3">
                            <div className={style.items}>
                               
                                {/* <button>{item.best}</button> */}
                                <h5>{item.plan}</h5>
                                <h2><span className='text-sm'>$</span>{item.price}</h2>
                                <div className='mb-5'>{item.ptext}</div>


                            <ul className={style.ul}>
                                {
                                    item.list.map((val)=>{
                                        const { icon, text ,change} = val
                                        return(
                                            <li>
                                                <div className="d-flex ">
                                                <label className={style.circl} style={{
                                                                    background: change === "color" ? "#dc35451f" : "#27ae601f",
                                                                    color: change === "color" ? "#dc3848" : "#27ae60",
                                                                }}>
                                                    {icon}
                                                </label>
                                                <p>{text}</p>
                                                </div>
                                            </li>
                                        )
                                        
                                         })
                                }
                            </ul>

                            <button
              className={style.btn}
              style={{
                background: item.plan === "Standard" ? "#27ae60" : "#fff",
                color: item.plan === "Standard" ? "#fff" : "#27ae60",
              }}
            >
              Start {item.plan}
            </button>
                            </div> 
                             
                        </div>
                    ))
                }
               
            </div>
    </>
  )
}
