import purchaseStyles from '../css/purchase.module.css';
import { useAppSelector } from '../features/hooks';
import { useState } from 'react';
import paymentOptions from '../icons/PaymentOptions.jpg';

export default function Purchase() {

    const itemToBeBought = useAppSelector(state => state.purchaseReducer)
    const [buyerInfo, setBuyerInfo] = useState({
        name: '',
        homeAddress: {
            country: '',
            zip: 0,
            address: ''
        }
    })

  
    return (

        <><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
            <div className={purchaseStyles["purchase-container"]}>
                <div className={purchaseStyles.item} style={{ padding: '10px' }}>
                    <div>{itemToBeBought.items[0].name}</div>
                    <img src={itemToBeBought.items[0].imageAddress} alt={itemToBeBought.items[0].name} draggable={false}></img>
                    <div>Quantity: {itemToBeBought.items[0].quantity}</div>
                </div>

                <div className={purchaseStyles['personal-info']}>
                    <div>
                        <p>Name:</p>
                        <input
                            onChange={(e) => setBuyerInfo({ ...buyerInfo, name: e.target.value })}
                            value={buyerInfo.name}></input>
                    </div>
                    <div>
                        <p>Country:</p>
                        <input
                            onChange={(e) => setBuyerInfo({
                                ...buyerInfo, homeAddress: {
                                    ...buyerInfo.homeAddress,
                                    country: e.target.value                
                                }
                            })}
                            value={buyerInfo.homeAddress.country}></input>
                    </div>
                    <div>
                        <p>ZIP Code:</p>
                        <input
                            onChange={(e) => setBuyerInfo({
                                ...buyerInfo, homeAddress: {
                                    ...buyerInfo.homeAddress,
                                    zip: Number(e.target.value)
                                }
                            })}
                            value={buyerInfo.homeAddress.zip !== 0 ? buyerInfo.homeAddress.zip: ''}></input></div>
                    <div>
                        <p>Home Address:</p>
                        <input
                            onChange={(e) => setBuyerInfo({
                                ...buyerInfo, homeAddress: {
                                    ...buyerInfo.homeAddress,
                                    address: e.target.value
                                }
                            })}
                            value={buyerInfo.homeAddress.address}></input></div>
                  <img style={{width: 'fit-content', height: '30px'}} src={paymentOptions} draggable={false} alt="Payment Options" />
                </div>

              
            </div>
        </div>
        </>
    )
}