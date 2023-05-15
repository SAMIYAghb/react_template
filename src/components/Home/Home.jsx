import React from 'react'


import Awards from './../Home/Awards/Awards';
import Landing from './../Home/Landing/Landing';
import Property from './../Home/Property/Property';
import Feature from './../Home/Feature/Feature';
import Team from './../Home/Team/Team';
import {Location}  from './../Home/Location/Location';
import Price from './../Home/Price/Price';




export default function Home() {
  return<>
  <Landing/>
  <Feature/>
  <Property/>
  <Awards/>
  <Location/>
  <Team/>
  <Price/>
  </>
  
}

