import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


import Img1 from '../imgs/1.jpg'
import Img2 from '../imgs/2.jpg'
import Img3 from '../imgs/3.jpg'
import Img4 from '../imgs/4.jpg'
import Img5 from '../imgs/5.jpg'
import Img6 from '../imgs/6.jpg'
import Img7 from '../imgs/7.jpg'
import Img8 from '../imgs/8.jpg'
import Img9 from '../imgs/9.jpg'

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9]

function Plants({plan, specefic = null}){
    const plants = useSelector(state => state.plantReducer)
    let collection = []
    // for(let i = 1; i <= plan ; i++){
    //     collection.push(<Plant img={`${i}`}/>)
    // }
    for(let plant in plants){
        let data = plants[`${plant}`]
        if(specefic == null){
            if(data.id > plan){
                break
            }
            collection.push(<Plant name={data.name} price={data.price} img={`${data.id}`}/>)
        }else{
            if(specefic.includes(+data.id)){
                collection.push(<Plant name={data.name} price={data.price} img={`${data.id}`}/>)
            }
        }

    }
    return(
        <div className="update plants-container">
            {collection}
            {/* <Plant img='1'/>
            <Plant img='2'/>
            <Plant img='3'/>
            <Plant img='4'/>
            <Plant img='5'/>
            <Plant img='6'/>
            <Plant img='7'/>
            <Plant img='8'/>
            <Plant img='9'/>
            <Plant img='10'/>
            <Plant img='11'/>
            <Plant img='12'/> */}
        </div>
    )
}

function Plant({name, price, img}){
    return(
        <Link to={`/plantinfo/${img}`} className="update plant flex flex-col">
            <div className="update img-container mb-3 flex-1">
                <img className="h-full" src={require(images[img - 1])} />
            </div>
            <p className="update mb-2">{name}</p>
            <p className="update text-green-600">{price}$</p>
        </Link>
    )
}

export default Plants;