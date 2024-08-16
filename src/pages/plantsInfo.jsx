import React from "react";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";

// Components
import { useParams } from "react-router-dom";
import Boxinfo from "../components/boxinfo";
import Plants from "../components/plants";
import Infos from "../components/infos";

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Plantinfo(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    const {plantid} = useParams()
    const plant = useSelector(state => state.plantReducer)[`${plantid}`]
    let details = []
    for(let key in plant.details){
        details.push(
            <>
                <h1 className="text-green-700">{key}</h1>
                <p className="text-xl mb-16">{plant.details[key]}</p>
            </>
        )
    }

    let related = []
    while(true){
        let item = getRandomNumber(1,9)
        if(!related.includes(+item) && +item != plantid){
            related.push(item)
            if(related.length == 2){
                break
            }
        }
    }
    return(
        <>

            <div className="pinfo">
                <Boxinfo plantid={plantid}/>
                <div className="plantinfo w-3/4 m-auto mt-16">
                    <h1 className="text-green-700"> Plant Information </h1>
                    <p className="text-xl mb-16">{plant.info}</p>
                    {details}
                </div>

                <div className="w-3/4 m-auto mt-16 pb-20">
                    <h1 className="text-green-700">Related Items</h1>
                    <div>
                        <Plants plan={4} specefic={related} />
                    </div>
                </div>
                <Infos />
            </div>

        </>
    )
}

export default Plantinfo;