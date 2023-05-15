import React from 'react'
import style from './Team.module.css';
import {team} from './../../data/Data'


export default function Team() {
  return (
    <>
    <div className={style.team}>
        <div className="container">
            <div className="heading">
                    <h2 className=''>Our Featured Agents</h2>
                    <p>La tadipisicing elit. Rerum, doloremque assumenda! Laudantium.</p>
            </div>
            <div className="row">
                {
                    team.map((val, index)=>(

                        <div key={index}  className="col-md-6 col-lg-4">
                            <div className={style.cards}>
                                <div className={style.listing}> {val.list} Listings</div>
                                <img  src={val.cover} className='img-fluid rounded-circle w-25 mt-5 ' alt="" />
                                <p><i class="fa-solid fa-location-dot"></i> {val.address}</p>
                                <h5>{val.name}</h5>


                                <ul  className='d-flex justify-content-center'>
                                {
                                    val.icon.map((icon, index)=>(
                                        <li key={index} className="p-2">{icon}</li>
                                    ))
                                }
                                </ul>

                                <div className="d-flex justify-content-around">
                                    <button className={style.envl}><i class="fa-solid fa-envelope"></i>Message</button>
                                    <button className={style.phone}><i class="fa-solid fa-phone"></i></button>
                                </div>







                            </div>
                        
                        </div>
                    ))
                }

                
            </div>
        </div>
    </div>
    </>
  )
}
