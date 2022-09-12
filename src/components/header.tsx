import React, { useEffect, useState } from 'react';
import '../css/header.css';
import SmartphoneIcon from '../icons/smartphone-icon.svg';
import HamburgerMenuIcon from '../icons/hamburger-menu-icon.svg';
import HamburgerMenuOpen from '../icons/hamburger-menu-open-icon.svg';

export default function Header() {

    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [getWindowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const setWidth = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
        }

        window.addEventListener("resize", () => {
            setWidth()
        })

        return () => window.removeEventListener('resize', setWidth);
    }, [])


    return (
        <>
            <div className='header-container'>
                <div id='webpage-name'>
                    <h1 id='page-name-txt'>
                        <img src={SmartphoneIcon}></img>Tech Store
                    </h1>
                </div>

                <div>
                    {getWindowWidth <= 500 &&
                        <div>
                            {!hamburgerClicked && <img src={HamburgerMenuIcon} onClick={() => setHamburgerClicked(!hamburgerClicked)} className='hamburger'></img>}
                            {hamburgerClicked && <img src={HamburgerMenuOpen} onClick={() => setHamburgerClicked(!hamburgerClicked)} className='hamburger'></img>}
                        </div>
                    }

                    {getWindowWidth > 500 &&
                    
                    <div> 

                        
                    </div>
                    
                    }
                </div>
            </div>
        </>
    )
}