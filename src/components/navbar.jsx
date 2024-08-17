import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SlMenu, SlBasket  } from "react-icons/sl";
import { useSelector } from 'react-redux';


function Nav(){
    const cart = useSelector(state => state.cartReducer);

    let handleclick = () => {
        let  menuicon = document.getElementById('menuicon') 
        let  menu = document.getElementById('menu')
        // console.log(menu.getAttribute('class').includes('disnone'))
        let newMenu = menu?.getAttribute('class').split(' ')
        menu.getAttribute('class').includes('disnone') ? console.log('disaaspadxlay') : newMenu.push('disnone')
        menu.getAttribute('class').includes('disnone') ? menu.setAttribute('class', newMenu.slice(0,-1).join(' ')) : menu.setAttribute('class', newMenu.join(' '))
        menu.getAttribute('class').includes('disnone') ? menu.style.left = '-100%' : menu.style.left = '0%'
    }
    
    return(
        <nav className='nav bg-white z-40 fixed w-full flex items-center pl-10 pr-10 pt-7 pb-6 shadow-lg'>
            <div className='logo text-2xl text-green-800'>
                <Link to='/'>Dabbas</Link>
            </div>
            <div className='list flex-1'>
                <SlMenu id='menuicon' onClick={handleclick} className='menuicon' />
                <ul id='menu' className='flex justify-end items-center text-sm text-gray-500 disnone'>
                    {/* <Link className={`p-2 mr-7 ${page == 'home' ? 'text-green-800' : null}`} to='/home'>HOME</Link>
                    <Link className={`p-2 mr-7 ${page == 'about' ? 'text-green-800' : null}`} to='/about'>ABOUT</Link>
                    <Link className={`p-2 mr-7 ${page == 'shop' ? 'text-green-800' : null}`} to='/shop'>SHOP</Link>
                    <Link className={`p-2 mr-7 ${page == 'contact' ? 'text-green-800' : null}`} to='/contact'>CONTACT</Link> */}
                    <li><NavLink className='p-2 mr-7' to='/'>HOME</NavLink></li>
                    <li><NavLink className='p-2 mr-7' to='/about'>ABOUT</NavLink></li>
                    <li><NavLink className='p-2 mr-7' to='/shop'>SHOP</NavLink></li>
                    <li><NavLink className='p-2 mr-7' to='/contact'>CONTACT</NavLink></li>
                </ul>
            </div>
            <SlBasket className='update text-xl cart text-gray-500' onClick={() => {
                document.getElementById('cart').style.left == '0px' ? document.getElementById('cart').style.left = '-100%' : document.getElementById('cart').style.left = '0px';

            }}/>

        </nav>
    )
}

export default Nav;