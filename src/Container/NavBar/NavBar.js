import React, { useEffect, useState, useContext } from 'react'
import './navBar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import CartContext from '../../Hooks/CartContext/CartContext'


let logo = ['https://www.seekpng.com/png/full/428-4289671_logo-e-commerce-good-e-commerce-logo.png']


const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [showNavigation, setShowNavigation] = useState(false)
    const [cartCount, setCartCount] = useState(0);
    const { updateCart, setUpdateCart} = useContext(CartContext)

    useEffect(()=>{
        if(localStorage.getItem('addProduct')){
            setCartCount(JSON.parse(localStorage.getItem('addProduct')).length)
        }else{
            setCartCount(0)
        }  
    }, [])

    const [processed, setProcessed] = useState(false)

    useEffect(()=>{
        let prevValue = 0;
        if(localStorage.getItem('addProduct')){
            prevValue = JSON.parse(localStorage.getItem('addProduct')).length
        }

        if(!processed){
            setProcessed(true)
            if(updateCart){
                setCartCount(0)
            }else{
                setCartCount(prevValue)
            }
        }else{
            if(updateCart){
                setCartCount(prevValue + 0)
            }else if(cartCount.length > 1){
                setCartCount(prevValue + 1)
            }
        }
    }, [updateCart, processed])
 

    useEffect(()=>{
       const handleWindowResize = () =>{
         setWindowWidth(window.innerWidth)
       }
       window.addEventListener('resize', handleWindowResize)
       return ()=>{
        window.removeEventListener('resize', handleWindowResize)
       }
    }, [])

    const handleNav = () =>{
        setShowNavigation(!showNavigation)
    }

    const handleShowNav = () =>{
        setShowNavigation(false)
    }

  return (
    <nav>
        <div>
             <Link to='/' onClick={handleShowNav}><img style={{width: '120px'}} src={logo[0]} /></Link>
        </div>
        <div className='navigation'>
            <ul className={`${showNavigation && 'showNav'}`}>
                <li>
                    <Link to='/' onClick={handleShowNav}>Home</Link>
                </li>
                <li>
                    <Link to='smartphone' onClick={handleShowNav}>Smart Phones</Link>
                </li>
                <li>
                    <Link to='laptop' onClick={handleShowNav}>Laptops</Link>
                </li>
                <li>
                    <Link to='cart' onClick={handleShowNav}>
                        <div className='cart-box'>
                            <AiOutlineShoppingCart />
                            <span>{cartCount}</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
        {windowWidth < 500 && (
            <div className='menu-bar' onClick={handleNav}>
               <BiMenuAltRight />
            </div>
        )}
    </nav>
  )
}

export default NavBar