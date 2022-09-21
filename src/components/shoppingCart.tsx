import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import '../css/shoppingCart.css';
import { Link } from 'react-router-dom';
import { removeItem } from '../features/shoppingCartReducer';
import { setItemInfo } from '../features/purchaseReducer';
import { updateQuantity } from '../features/shoppingCartReducer'
export default function ShoppingCart() {
    const smartphones = useAppSelector(state => state.shoppingCartReducer.items);
    
    const dispatch = useAppDispatch();

    return (
        <>
            <div className='shoppingCart-container'>
                <div className='shoppingCart-header'>
                    <h1>Shopping Cart</h1>
                    <Link className='links' to='/'><h2>Home</h2></Link>
                </div>


                <div id='items-container'>
                    {smartphones.length > 0 ? smartphones.map(eachPhone => {
                        console.log(eachPhone.quantity)
                        return (
                            <div key={nanoid()} className='shopping-cart-items'>

                                <img alt={eachPhone.name + "Phone Picture"} src={eachPhone.imageAddress} draggable={false}></img>
                                <div>{eachPhone.name}</div>
                                <div id='buy-remove'>
                                    <div id='quantity'>
                                        <div className='quantity-button' onClick={() => {
                                            dispatch(updateQuantity({
                                                id: eachPhone.id,
                                                action: 'minus'
                                            }))
                                        }
                                        }>-</div>
                                        <p>{eachPhone.quantity}</p>
                                        <div className='quantity-button' onClick={() => {
                                            dispatch(updateQuantity({
                                                id: eachPhone.id,
                                                action: 'plus'
                                            }))
                                    }}>+</div>
                                </div>
                                <div id='buy-remove-buttons'>
                                <button className='shopping-cart-buttons' onClick={() => dispatch(removeItem({
                                    itemId: eachPhone.id
                                }))}>Remove</button>
                                <Link to='/shopping-cart/purchase'><button onClick={() => {
                                    dispatch(setItemInfo({
                                        id: eachPhone.id,
                                        name: eachPhone.name,
                                        imageAddress: eachPhone.imageAddress,
                                        quantity: eachPhone.quantity,
                                    }))
                                }} className='shopping-cart-buttons'>Buy</button>
                                </Link>
                                </div>
                                </div>
                            </div>
                )
                    }) : <h3 id='no-items'>You Have No items in your shopping cart 😔
                    <p>Try Adding Some 😊</p></h3>}
            </div>
        </div>
        </>
    )
}