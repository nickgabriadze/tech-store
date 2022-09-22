import purchaseStyles from '../css/purchase.module.css';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import { useState } from 'react';
import paymentOptions from '../icons/PaymentOptions.jpg';
import { savePersonalInfo } from '../features/purchaseReducer';
import checkPersonalInfo from '../features/checkPersonalInfo';

export default function Purchase() {

    const itemToBeBought = useAppSelector(state => state.purchaseReducer)
    const [buyerInfo, setBuyerInfo] = useState({
        name: '',
        homeAddress: {
            country: '',
            zip: '',
            address: ''
        }
    })
    const dispatch = useAppDispatch();
    const [checkAgain, setCheckAgain] = useState(false)
    
    return (

        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', flexDirection: 'column' }}>
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
                                onChange={(e) => {setBuyerInfo({ ...buyerInfo, name: e.target.value }); setCheckAgain(false)}}
                                value={buyerInfo.name}></input>
                        </div>
                        <div>
                            <p>Country:</p>
                            <input
                                onChange={(e) => {setBuyerInfo({
                                    ...buyerInfo, homeAddress: {
                                        ...buyerInfo.homeAddress,
                                        country: e.target.value
                                    }
                                }); setCheckAgain(false)}}
                                value={buyerInfo.homeAddress.country}></input>
                        </div>
                        <div>
                            <p>ZIP Code:</p>
                            <input
                                type='number'
                                onChange={(e) => {setBuyerInfo({
                                    ...buyerInfo, homeAddress: {
                                        ...buyerInfo.homeAddress,
                                        zip: String(e.target.value)
                                    }
                                }); setCheckAgain(false)}}
                                value={buyerInfo.homeAddress.zip}></input></div>
                        <div>
                            <p>Home Address:</p>
                            <input
                                onChange={(e) => {setBuyerInfo({
                                    ...buyerInfo, homeAddress: {
                                        ...buyerInfo.homeAddress,
                                        address: e.target.value
                                    }
                                }); setCheckAgain(false)}}
                                value={buyerInfo.homeAddress.address}></input></div>
                        <img style={{ width: 'fit-content', height: '30px' }} src={paymentOptions} draggable={false} alt="Payment Options" />
                    </div>


                </div>
                <div 
                    className={purchaseStyles['purchase-button']}
                    onClick={() => {
                        if (checkPersonalInfo(buyerInfo)) {
                            setCheckAgain(false)
                            dispatch(savePersonalInfo({
                                buyerInfo
                            }))
                        }else{
                            setCheckAgain(true)
                        }
                    }}
                >Purchase</div>
                <p>{checkAgain ?  `Check the info above to make sure that you aren't missing anything`: ''}</p>
            </div>
        </>
    )
}