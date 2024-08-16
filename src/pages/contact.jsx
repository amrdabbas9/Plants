import React from "react";
import { useLayoutEffect } from "react";

// Components :
import Infos from "../components/infos";
import SecHeader from "../components/secHeader";

function Contact(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return(
        <>
            <div className="about relative overflow-hidden">
                <div className="absolute z-20 left-20 top-1/2 -translate-y-1/2 w-6/12">
                    <h1 className="text-gray-700 text-5xl font-semibold mt-6 mb-6">CONTACT</h1>
                    <p className="text-gray-500 text-base mb-6">The attractions of ceramics lie partly in its contradictions.
                        It is both difficult and easy, with an element beyond our control.
                        It is both extremely fragile and durable. Like 'Sumi' ink painting,
                        it does not lend itself to erasures and indecision.</p>
                </div>
                <img src={require('../imgs/about.jpg')} className="absolute aboutimg"/>
            </div>
            <div className="touch pt-5 pb-20">
                <div className="w-4/5 m-auto">
                    <SecHeader sec='CONTACT US' header='LETs GET IN TOUCH' />
                    <div className="flex">
                        <div className="touchimg w-80 pr-7 border-r-2 mr-5">
                            <img src={require('../imgs/2.jpg')} />
                        </div>
                        <div className="flex-1 pl-10">
                            <div className="touchinp flex justify-between mb-10">
                                <div className="mr-3 flex-1">
                                    <h2 className="mb-3 text-gray-600">Name :</h2>
                                    <input type="text" className=" outline-none w-full p-3 text-gray-600 bg-gray-100"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h2 className="mb-3 text-gray-600">Email Address :</h2>
                                    <input type="text" className="outline-none w-full p-3 text-gray-600 bg-gray-100" 
                                        placeholder="Enter Your Email"
                                    
                                    />
                                </div>
                            </div>
                            <div className="mb-5">
                                <h2 className="mb-3 text-gray-600">Message :</h2>
                                <textarea className="outline-none p-3 text-gray-600 bg-gray-100 resize-none w-full h-36"
                                        placeholder="How Can We Help"
                                ></textarea>
                            </div>
                            <button className="putton">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
            <Infos />
        </>
    )
}

export default Contact;