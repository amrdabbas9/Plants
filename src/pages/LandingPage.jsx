import React from "react";
import { useLayoutEffect } from "react";

// Components :
import Landing from '../components/landing';
import SecHeader from '../components/secHeader';
import Plants from '../components/plants';
import Latest from "../components/latest";
import Infos from "../components/infos";
import { Link } from "react-router-dom";

function LandingPage(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return(
        <>
            <Landing />
            <div className='plants page'>
                    <div className='container'>
                    <SecHeader sec='Our Online Store' header='Plants Collection'  />
                    <Plants plan={6} />
                    <button className='putton mt-16 mb-16 ml-auto mr-auto block'><Link to='/shop'>VIEW ALL PRODUCTS</Link></button>
                </div>
            </div>
            <div className='relative ready ' style={{height:'350px', overflow: 'hidden'}} >
                <img src={require('../imgs/ver.jpg')} className="absolute -z-10 top-2/3 -translate-y-1/2 -translate-x-16" style={{scale:'125%'}}/>
                <div className='container flex flex-col justify-center h-full'>
                    <div className="w-1/2">
                        <h3 className="text-green-700">DABBAS PLANTS</h3>
                        <h1 className="text-gray-700 text-4xl font-semibold mt-6 mb-6">Ready To Start Shoping</h1>
                        <p className="text-gray-500 text-lg mb-6">Plants are nature’s art, a reminder that beauty grows around us.</p>
                        <button className="putton"><Link to='/shop'>NEW COLLECTION</Link></button>
                    </div>
                </div>
            </div>
            <Latest />
            <Infos />
        </>
    )
}

export default LandingPage;