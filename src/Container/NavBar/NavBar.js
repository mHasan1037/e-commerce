import React, { useCallback, useEffect, useState } from 'react'
import './navBar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

let logo = ['https://www.seekpng.com/png/full/428-4289671_logo-e-commerce-good-e-commerce-logo.png']

const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [showNavigation, setShowNavigation] = useState(false)
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
             <Link to='/'><img style={{width: '120px'}} src={logo[0]} /></Link>
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