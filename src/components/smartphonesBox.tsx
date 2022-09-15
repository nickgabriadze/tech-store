import React, { useEffect, useState } from 'react'
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
    const [phoneMover, setPhoneMover] = useState(0);
    const [rightButtonStatus, setRightButtonStatus] = useState('active')
    const [leftButtonStatus, setLeftButtonStatus] = useState('disabled')
    const [leftOrRight, setLeftOrRight] = useState('none')
    const [animation, setAnimation] = useState({ opacity: [0, 0.4, 0.5, 0.9, 1],x:[-200, 0] })

    useEffect(() => {
        if (phoneMover % 2 === 0) {
            setAnimation({ ...animation, opacity: [0, 0.3, 0.5, 0.8, 1], x: leftOrRight === 'right'? [310, 0]: [-310, 0]})
            } else { setAnimation({ ...animation, opacity: [0, 0.2, 0.4, 0.9, 1], x: leftOrRight === 'right'? [305, 0]: [-305, 0] }) 
    }
    }, [phoneMover, animation, leftOrRight])


return (
    <>
        <div className='smartphones-header'>
            <h3 style={{ textAlign: 'center', fontFamily: `Oxygen, sans-serif`, color: '#5a3f9e' }}>Smartphones</h3>

            <div className="smartphones-container">


                <img className="moving-buttons" alt={'Arrow Pointing to the Left'}
                    onClick={() => { phoneMover > 0 ? setPhoneMover(phoneMover - 1) : setLeftButtonStatus('disabled'); setRightButtonStatus('active'); setLeftOrRight('left') }}
                    style={leftButtonStatus === 'disabled' ? { opacity: 0.5, cursor: 'unset' } : { opacity: 1, cursor: 'pointer' }}
                    src={LeftPointingArrow} id='left-pointing-arrow'></img>

                <div id='horizontal-box'>

                    <motion.div
                        animate={animation}
                        id='smartphone'>
                        <img src={smartphones.devices[phoneMover].imageAddress} alt={smartphones.devices[phoneMover].name + "Picture"} id='smartphone-image' draggable={false}></img>
                        <p style={{ textAlign: 'center', fontFamily: `Open Sans, san-serif`, padding: '10px' }}>{smartphones.devices[phoneMover].name}</p>
                        <motion.button className='add-to-shoppingCart'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => dispatch(addItem({
                                phoneId: smartphones.devices[phoneMover].id,
                                imageAddress: smartphones.devices[phoneMover].imageAddress,
                                name: smartphones.devices[phoneMover].name
                            }))}>Add to Shopping Cart</motion.button>
                        <Link to={'/chosen-device-specs'}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                style={{ width: 'fit-content', height: '40px' }}
                                whileTap={{ scale: 0.9 }}
                                className='add-to-shoppingCart' onClick={() => dispatch(saveInfo({
                                    name: smartphones.devices[phoneMover].name,
                                    imageAddress: smartphones.devices[phoneMover].imageAddress,
                                    network: smartphones.devices[phoneMover].specs.network,
                                    announced: smartphones.devices[phoneMover].specs.announced,
                                    dimensions: smartphones.devices[phoneMover].specs.dimensions,
                                    weight: smartphones.devices[phoneMover].specs.weight,
                                    build: smartphones.devices[phoneMover].specs.build,
                                    sim: smartphones.devices[phoneMover].specs.sim,
                                    displaySize: smartphones.devices[phoneMover].specs.displaySize,
                                    platform: smartphones.devices[phoneMover].specs.platform,
                                    chipset: smartphones.devices[phoneMover].specs.chipset,
                                    cpu: smartphones.devices[phoneMover].specs.cpu,
                                    gpu: smartphones.devices[phoneMover].specs.gpu,
                                    memory: smartphones.devices[phoneMover].specs.memory,
                                    camera: smartphones.devices[phoneMover].specs.camera,
                                    video: smartphones.devices[phoneMover].specs.video,
                                    selfieCamera: smartphones.devices[phoneMover].specs.selfieCamera,
                                    battery: smartphones.devices[phoneMover].specs.battery,
                                    colors: smartphones.devices[phoneMover].specs.colors

                                }))}>View Specs</motion.button>
                        </Link>

                    </motion.div>
                </div>

                <img className="moving-buttons" src={RigthPointingArrow}
                    onClick={() => { phoneMover < smartphones.devices.length - 1 ? setPhoneMover(phoneMover + 1) : setRightButtonStatus('disabled'); setLeftButtonStatus('active'); setLeftOrRight('right') }}
                    alt={'Arrow Pointing to the Right'} id='right-pointing-arrow' style={rightButtonStatus === 'disabled' ? { opacity: 0.5, cursor: 'unset' } : { opacity: 1, cursor: 'pointer' }}></img>

            </div>
        </div>
    </>
)
}
