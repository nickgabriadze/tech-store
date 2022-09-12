import React, { useEffect, useState } from 'react';
import '../css/header.css';
import SmartphoneIcon from '../icons/smartphone-icon.svg';
import ShoppingCartIcon from '../icons/shopping-cart-icon.svg';

export default function Header() {

    
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
                        <img src={SmartphoneIcon} alt={'Smartphone Icon'}></img>Tech Store
                    </h1>
                </div>

                <div>
                  
                    <img src={ShoppingCartIcon} alt={'Shopping Cart Icon'}></img>
                </div>
            </div>
        </>
    )
};