import React, { useCallback, useEffect, useState } from 'react'
import './navBar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

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

  return (
    <nav>
        <div>
            <h2>
                <Link to='/'><span>E</span>-commerce</Link>
            </h2>
        </div>
        <div className='navigation'>
            <ul className={`${showNavigation && 'showNav'}`}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='smartphone'>Smart Phones</Link>
                </li>
                <li>
                    <Link to='laptop'>Laptops</Link>
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