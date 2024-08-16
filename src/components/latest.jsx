import React from "react";
import SecHeader from "./secHeader";

function Latest(){

    return(
        <div className="latest pt-12 mt-10 pb-16">
            <div className="container">
                <SecHeader sec='LATEST NEWS' header='Latest news & New updates' />
                <div className="form mt-28 flex justify-center">
                    <input type="text" className="w-96 pl-6 pr-6 outline-none text-gray-500 bg-gray-100" placeholder="Enter Your Email"/>
                    <button className="putton">Subscribe</button>

                </div>
                <div className="mt-5 flex justify-center">
                    <input type="checkbox" className="mr-3 outline-none"/>
                    <label className="text-gray-300 text-sm">Sign up for our newsletter</label>
                </div>
            </div>
        </div>
    )
}

export default Latest;