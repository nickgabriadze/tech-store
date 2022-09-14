import React from 'react'
import { addItem } from '../features/shoppingCartReducer';
import '../css/smartphonesBox.css';
import { useAppDispatch } from '../features/hooks';
import LeftPointingArrow from '../icons/left-pointing-arrow-icon.svg';
import RigthPointingArrow from '../icons/right-pointing-arrow-icon.svg';
import {motion} from 'framer-motion';

export default function SmartphonesBox(smartphones: { devices: { id: number, name: string, imageAddress: string }[] }) {

    const dispatch = useAppDispatch();

    return (
        <>
            <div className="smartphones-container">
                
          
            <img className="moving-buttons" alt={'Arrow Pointing to the Left'} src={LeftPointingArrow} id='left-pointing-arrow'></img>
                
                <div id='horizontal-box'>
                   
                    {smartphones.devices.map(each => {
                        return (
                            <div key={each.id} id='smartphone'>
                                <img src={each.imageAddress} alt={each.name + "Picture"} id='smartphone-image'></img>
                                <p style={{textAlign: 'center', fontFamily:`Open Sans, san-serif`, padding: '10px'}}>{each.name}</p>
                                <motion.button className='add-to-shoppingCart' 
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                onClick={()=> dispatch(addItem({
                                    phoneId: each.id,
                                    imageAddress: each.imageAddress,
                                    name: each.name
                                }))}>Add to Shopping Cart</motion.button>
                            </div>
                        )
                    })}
                  
                </div>
                
                <img className="moving-buttons" src={RigthPointingArrow}alt={'Arrow Pointing to the Right'} id='right-pointing-arrow'></img>
                
            </div>
        </>
    )
}
