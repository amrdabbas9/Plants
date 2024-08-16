import React from 'react';


function SecHeader({sec, header}){

    return(
        <div className='m-auto w-fit text-center mb-16'>
            <p className='sec text-green-700 font-semibold text-lg'>{sec}</p>
            <h1 className='text-gray-700 header'>{header}</h1>
        </div>
    )
}

export default SecHeader;