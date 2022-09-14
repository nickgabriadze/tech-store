import React from 'react'
import { addItem } from '../features/shoppingCartReducer';
import '../css/smartphonesBox.css';
import { useAppDispatch } from '../features/hooks';
import LeftPointingArrow from '../icons/left-pointing-arrow-icon.svg';
import RigthPointingArrow from '../icons/right-pointing-arrow-icon.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { saveInfo } from '../features/specsReducer';

export default function SmartphonesBox(smartphones: {
    devices: {
        id: number, name: string, imageAddress: string, specs: {
            network: string,
            announced: string,
            dimensions: string,
            weight: string,
            build: string,
            sim: string,
            displaySize: string,
            platform: string,
            chipset: string,
            cpu: string,
            gpu: string,
            memory: string,
            camera: string[],
            video: string,
            selfieCamera: string,
            battery: string,
            colors: string
        }
    }[]
}) {

    const dispatch = useAppDispatch();
    console.log(smartphones.devices)

    return (
        <>
            <div className='smartphones-header'>
                <h3 style={{ textAlign: 'center', fontFamily: `Oxygen, sans-serif`, color: '#5a3f9e' }}>Smartphones</h3>

                <div className="smartphones-container">


                    <img className="moving-buttons" alt={'Arrow Pointing to the Left'} src={LeftPointingArrow} id='left-pointing-arrow'></img>

                    <div id='horizontal-box'>

                        {smartphones.devices.map(each => {
                            return (
                                <div key={each.id} id='smartphone'>
                                    <img src={each.imageAddress} alt={each.name + "Picture"} id='smartphone-image'></img>
                                    <p style={{ textAlign: 'center', fontFamily: `Open Sans, san-serif`, padding: '10px' }}>{each.name}</p>
                                    <motion.button className='add-to-shoppingCart'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => dispatch(addItem({
                                            phoneId: each.id,
                                            imageAddress: each.imageAddress,
                                            name: each.name
                                        }))}>Add to Shopping Cart</motion.button>
                                    <Link to={'/chosen-device-specs'}>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            style={{ width: 'fit-content', height: '40px' }}
                                            whileTap={{ scale: 0.9 }}
                                            className='add-to-shoppingCart' onClick={() => dispatch(saveInfo({
                                                name: each.name,
                                                imageAddress: each.imageAddress,
                                                network: each.specs.network,
                                                announced: each.specs.announced,
                                                dimensions: each.specs.dimensions,
                                                weight: each.specs.weight,
                                                build: each.specs.build,
                                                sim: each.specs.sim,
                                                displaySize: each.specs.displaySize,
                                                platform: each.specs.platform,
                                                chipset: each.specs.chipset,
                                                cpu: each.specs.cpu,
                                                gpu: each.specs.gpu,
                                                memory: each.specs.memory,
                                                camera: each.specs.camera,
                                                video: each.specs.video,
                                                selfieCamera: each.specs.selfieCamera,
                                                battery: each.specs.battery,
                                                colors: each.specs.colors

                                            }))}>View Specs</motion.button>
                                    </Link>
                                </div>


                            )
                        })}

                    </div>

                    <img className="moving-buttons" src={RigthPointingArrow} alt={'Arrow Pointing to the Right'} id='right-pointing-arrow'></img>

                </div>
            </div>
        </>
    )
}
