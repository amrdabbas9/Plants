import React from "react";
import { useLayoutEffect } from "react";

// Components :
import Latest from "../components/latest";
import Plants from "../components/plants";
import SecHeader from "../components/secHeader";

function Shop(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return(
        <>
            <div className="about relative overflow-hidden">
                <div className="absolute z-20 left-20 top-1/2 -translate-y-1/2 w-6/12">
                    <h1 className="text-gray-700 text-5xl font-semibold mt-6 mb-6">SHOP</h1>
                    <p className="text-gray-500 text-base mb-6">The attractions of ceramics lie partly in its contradictions.
                        It is both difficult and easy, with an element beyond our control.
                        It is both extremely fragile and durable. Like 'Sumi' ink painting,
                        it does not lend itself to erasures and indecision.</p>
                </div>
                <img src={require('../imgs/about.jpg')} className="absolute aboutimg"/>
            </div>
            <div className='plants page'>
                    <div className='container'>
                    <SecHeader sec='Our Online Store' header='Plants Collection'  />
                    <Plants plan={9} />
                </div>
            </div>
            <Latest />
        </>
    )
}

export default Shop;