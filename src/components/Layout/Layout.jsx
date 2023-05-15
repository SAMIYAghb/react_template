import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './../Commun/Header/Header';
import Footer from './../Commun/Footer/Footer';

export default function Layout() {
  return<>

    <Header/>
      <Outlet/>
    <Footer/>

   
    </>

}
