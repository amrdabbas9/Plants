import React from "react";
import { MdOutlineMailOutline, MdLocationPin, MdPhoneEnabled } from "react-icons/md";
import { SlEnvolope, SlLocationPin, SlPhone } from "react-icons/sl";
function Infos(){

    return(
        <div className="page infos bg-gray-100 pb-16">
            <div className="container text-gray-800">
                <h2 className="text-gray-700 infohead text-4xl text-center mt-10">Dabbas</h2>
                <p className="text-gray-600 text-center mt-3">Green your life, one leaf at a time</p>
                    <div className="flex justify-around items-center mt-20">
                        <div className="info flex-1 flex flex-col items-center text-center p-5">
                            <SlEnvolope className="text-3xl mb-5"/>
                            <h2>EMAIL</h2>
                            <p className="text-gray-600 mt-3">amr0dabbas@gmail.com</p>
                        </div>
                            <div className="info flex-1 flex flex-col items-center text-center p-5">
                            <SlLocationPin className="text-3xl mb-5" />
                            <h2>FIND</h2>
                            <p className="text-gray-600 mt-3">Syria, Aleppo, 021</p>
                        </div>
                            <div className="info flex-1 flex flex-col items-center text-center p-5">
                            <SlPhone  className="text-3xl mb-5" />
                            <h2>CALL</h2>
                            <p className="text-gray-600 mt-3">+963 935 924 071</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Infos;
