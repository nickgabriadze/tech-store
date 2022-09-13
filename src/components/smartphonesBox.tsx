import React from 'react'
import '../css/smartphonesBox.css';
import NavigationArrowIcon from '../icons/navigation-arrow-icon.svg';


export default function SmartphonesBox(smartphones: { devices: { id: number, name: string, imageAddress: string }[] }) {


    return (
        <>
            <div className="smartphones-container">
            <img className="moving-buttons" src={NavigationArrowIcon}></img>
                <div id='horizontal-box'>
                   
                    {smartphones.devices.map(each => {
                        return (
                            <div key={each.id}>
                                <img src={each.imageAddress} alt={each.name + "Picture"} id='smartphone-image'></img>
                                <p style={{textAlign: 'center', fontFamily:`Open Sans, san-serif`}}>{each.name}</p>
                            </div>
                        )
                    })}
                  
                </div>
                
                <img className="moving-buttons" src={NavigationArrowIcon} id='right-pointing-arrow'></img>
            </div>
        </>
    )
}
