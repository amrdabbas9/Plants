import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { del, dec, inc } from "../store/action";
import { SlArrowUp, SlArrowDown, SlTrash, SlClose   } from "react-icons/sl";

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


function Cart(){
    let [render, setRender] = useState(0)
    let cart = useSelector(state => state.cartReducer)
    let dispatch = useDispatch()

    function handleclick(e){
        console.log(e.target.id)
            if(typeof e.target.className != 'object' ? e.target.className.includes('update') : e.target.className.baseVal.includes('update')){
                setRender(render => render + 1);   
            }
    }
    useEffect(()=>{
    let listener = window.addEventListener('click', handleclick)
        return() => {
            // To Cleanup the Event Listener when the component unmount so we dont have it cause it will slower the app.
            window.removeEventListener('click', handleclick)
        }
    },[])
    let totalprice = 0;
    return(
        <div id="cart" className="carting w-2/3 fixed bg-white h-dvh -left-full top-0 z-40 p-10 flex flex-col">
            <div className="flex-1 overflow-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-green-700 text-2xl m-0">Your Cart :</h1>
                    {/* <p id='update' className='p-2' onClick={() => {
                        document.getElementById('cart').style.left == '0px' ? document.getElementById('cart').style.left = '-100%' : document.getElementById('cart').style.left = '0px';
                        }}>
                        Exit</p> */}
                        <SlClose className="text-green-700 text-2xl cursor-pointer" onClick={() => {
                        document.getElementById('cart').style.left == '0px' ? document.getElementById('cart').style.left = '-100%' : document.getElementById('cart').style.left = '0px';
                        }} />
                </div>
                {cart.map((e) => {
                    totalprice += e.quantity * +e.price
                    return(
                        <div className="flex items-center mb-4 bg-gray-100">
                            <div className="w-14 h-14 mr-4 overflow-hidden"> 
                                <img className='w-full h-full' src={require(images[e.plant_id - 1])} /> 
                            </div>
                            <div className="flex-1 pl-5">
                                <h2 className="text-gray-500">Quantity : {e.quantity}</h2>
                                <p className="text-gray-500">Price : {e.quantity * e.price}$</p>
                            </div>
                            
                            <div className="flex mr-3 items-center text-gray-400">
                                <div className="mr-3 text-xs">
                                    <SlArrowUp className="update arrow" onClick={() => {
                                        dispatch(inc(e.plant_id))
                                    }} />
                                    <SlArrowDown className="update arrow" onClick={() => {
                                    dispatch(dec(e.plant_id))
                                    }} />
                                </div>
                                <div>
                                    <SlTrash className="update bin text-xl" onClick={() => {
                                    dispatch(del(e.plant_id))
                                    }} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 className="bg-green-700 text-center p-3 text-white">Total Price : {totalprice}$</h2>
        </div>
    )
}

export default Cart;