import React from "react";
import { Link } from "react-router-dom";

function Landing(){

    return(
        <div className="landing flex relative overflow-hidden">
            <div className="absolute z-20 left-20 top-1/2 -translate-y-1/2 w-7/12">
                <h3 className="text-green-700">DABBAS PLANTS</h3>
                {/* <h1 className="text-5xl font-semibold mt-6 mb-6">Nature’s Palette: Grow, Thrive, Bloom</h1> */}
                <h1 className="text-gray-700 text-6xl font-semibold mt-6 mb-6">Grow a Plant for a Better Life</h1>
                <p className="text-gray-500 text-lg mb-6">Plants are nature’s art, a reminder that beauty grows around us.</p>
                {/* <p className="text-gray-500 text-lg mb-6">Plants are nature’s art, a reminder that beauty grows around us, nurturing our spirit and the world we share.</p> */}
                {/* <button className="p-5 pr-8 pl-8 bg-green-700 text-white">Shop Collection</button> */}
                <button className="putton"><Link to='/shop'>Shop Collection</Link></button>
            </div>
            {/* <div className="flex-1 overflow-hidden"> */}
                <img src={require('../imgs/la.jpg')} className="absolute landingimg scale-150 -translate-y-6"/>
                {/* <img src={require('../imgs/la.jpg')} className="scale-125 -translate-y-6 translate-x-36"/> */}
                {/* // className="w-full h-full"/>  */}
            {/* </div> */}
        </div>
    )
}

export default Landing;