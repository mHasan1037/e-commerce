import React, { useCallback, useEffect, useState } from 'react'
import './navBar.css'
import { BiMenuAltRight } from 'react-icons/bi'

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
                <span>E</span>-commerce
            </h2>
        </div>
        <div className='navigation'>
            <ul className={`${showNavigation && 'showNav'}`}>
                <li>
                    <a href=''>Link</a>
                </li>
                <li>
                    <a href=''>Link</a>
                </li>
                <li>
                    <a href=''>Link</a>
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