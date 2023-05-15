import React from 'react';
import './App.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
import Blog from './components/Pages/Blog/Blog';
import Pricing from './components/Pages/Pricing/Pricing';
import Contact from './components/Pages/Contact/Contact';




function App() {
  let routers = createBrowserRouter([            
    {path:'/', element:<Layout/>, children:[
      {index:'true', element:<Home/>},
      {path:'about', element:<About/>},
      {path:'services', element:<Services/>},
      {path:'blog', element:<Blog/>},
      {path:'pricing', element:<Pricing/>},
      {path:'contact', element:<Contact/>},
    ]}
  ]);
  return<>

      <RouterProvider router={routers}/>
      
    </>
}

export default App;
