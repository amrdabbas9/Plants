import React from "react";
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { useLayoutEffect } from "react";

// Pages :
import LandingPage from "./pages/LandingPage";
import About from "./pages/about";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Plantinfo from "./pages/plantsInfo";

// Components :
import Nav from "./components/navbar";
import Cart from "./components/cart";
import Footer from "./components/footer";


// import { ReactComponent as E404} from './imgs/404.svg';
import E404 from './imgs/404.svg';

export const router = createBrowserRouter([
    {element: <MainRoute />, children:[
        // {path:'*', element: <Notfound />},
        { path:'/', element: <LandingPage /> },
        { path:'/about', element: <About /> },
        { path:'/shop', element: <Shop /> },
        { path:'/contact', element: <Contact /> },
        { path:'/plantinfo/:plantid', element: <Plantinfo /> },
    ]}

])


function MainRoute(){
    
    return(
        <>
            <Nav />
            <Cart />
            <Outlet />
            <Footer />
        </>
    )
}


function Notfound(){

    return(
        <div className="error m-0 flex justify-center items-center text-green-700">
            {/* <img src={require('./imgs/404.svg')} alt="Not Found 404"/> */}
            <E404 className="e404 w-64 h-fit" alt='Not Found 404'/>
        </div>
    )
}