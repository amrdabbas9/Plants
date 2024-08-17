import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/action";

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

function Boxinfo({plantid}){
    const plant = useSelector(state => state.plantReducer)[`${plantid}`]
    const dispatch = useDispatch()
    return(
        <>
            <div className="boxinfo flex w-3/4 m-auto">
                <div className="w-2/5 flex justify-center">
                    <img src={require(images[plantid - 1])} />
                </div>
                {/* <div className="flex-1 flex flex-col justify-between pl-16"> */}
                <div className="flex-1 flex flex-col justify-between pl-4">
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <h2 className="text-green-700 text-2xl">Product Detail</h2>
                        <h1>{plant.name}</h1>
                        {/* <h2 className="text-green-700 text-2xl">100$</h2> */}

                        <p className="boxdetail flex text-gray-500 text-lg">
                            {plant.info}
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <p className=" text-lg">Price : <span className="text-green-700">{plant.price}$</span></p>
                            <div className="flex items-center">
                                <label htmlFor="quantity">Quantity : </label>
                                <input id='quantity' type="number" defaultValue={1} className="outline-none w-10"/>
                            </div>
                        </div>
                        <button className="putton update w-full" onClick={() => {
                            dispatch(add(plant.id, document.getElementById('quantity').value, +plant.price))
                        }}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Boxinfo;