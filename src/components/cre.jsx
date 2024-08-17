import React from "react";

function Cre({name, position, about}){

    return(
        <div className="cre mr-4 flex flex-col items-center p-6 border rounded-lg w-fit">
            <div className="flex-1 max-w28 w-56 rounded-full overflow-hidden">
                <img src={require('../imgs/crew1.jpg')}
                    className="w-full h-full"
                />
            </div>
            <div className="flex-1 text-center">
                <h2 className="mt-5">{name}</h2>
                <p className="mt-5 text-gray-600 text-xs">{position}</p>
                <p className="mt-5 text-gray-600 text-sm">{about}</p>
                <div className="mt-5 flex justify-center">
                    <div className="p-4 mr-5 bg-green-600"></div>
                    <div className="p-4 mr-5 bg-green-600"></div>
                    <div className="p-4 bg-green-600"></div>
                </div>
            </div>
        </div>
    )
}

export default Cre;