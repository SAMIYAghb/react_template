import React from 'react'
import style from './Feature.module.css';
import {featured} from '../../data/Data'

export default function FeatureCards() {
  return (
    <>
    <div className="row justify-content-around text-center ">

{featured.map((fea, index)=>(

    <div key={index}className="col-md-6 col-lg-2 mt-3">
        <div className={style.boxs}>
            <img className='w-50 img-fluid mb-2' src={fea.cover} alt="" />
            <h3>{fea.name}</h3>
            <p>{fea.total}</p>
        </div>
    </div>
))}




</div>
    </>
  )
}
