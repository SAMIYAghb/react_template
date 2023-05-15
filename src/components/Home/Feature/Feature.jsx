import React from 'react'
import style from './Feature.module.css';
import FeatureCards from './FeatureCards';


export default function Feature() {
  return (
    <div className={style.feature}>
        <div className="container">
            <div className="heading">
                    <h2 className=''>Featured Property Types</h2>
                    <p>Find All Type Of Property</p>
            </div>
            
            <FeatureCards/>
        </div>
    </div>
  )
}
