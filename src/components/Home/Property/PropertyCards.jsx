import React from 'react'
import style from './Property.module.css'
import{list} from '../../data/Data'

export default function PropertyCards() {
  return (
    <>
    <div className="row gy-4">

{list.map((item,index)=>(

    <div key={item.id} className="col-md-6 col-lg-4">
        <div className={style.boxs}>

            <img src={item.cover} className='w-100 mb-4' alt='' />
            <div className=" d-flex justify-content-between pb-3">
                <span>{item.category}</span>
                
            </div>
            
            <h3 className=''>{item.name}</h3>
            <span className=''>{item.location}</span>
            <div className={style.detail}>
            <div className="my-3 d-flex justify-content-between">
                <button className={style.btn}>{item.price}</button>
                <div>{item.type}</div>
            </div>
            </div>
        </div>
        </div>



))}

        



</div>
    </>
  )
}
