import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../features/hooks';
import '../css/shoppingCart.css';
import { Link } from 'react-router-dom';

import { removeItem } from '../features/shoppingCartReducer';
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

                        return (
                            <div key={nanoid()} className='shopping-cart-items'>
                                
                                <img alt={eachPhone.name + "Phone Picture"}src={eachPhone.imageAddress}></img>
                                <div>{eachPhone.name}</div>
                                <div>
                                <button className='shopping-cart-buttons' onClick={() => dispatch(removeItem({
                                    itemId: eachPhone.id
                                }))}>Remove</button>
                                <button className='shopping-cart-buttons'>Buy</button>
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