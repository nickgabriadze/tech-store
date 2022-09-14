import { nanoid } from '@reduxjs/toolkit';
import { useAppSelector } from '../features/hooks';

export default function ShoppingCart(){
    const smartphones = useAppSelector(state => state.shoppingCartReducer.items);


    return(
        <>
        {smartphones.map(eachPhone => {

            return (
                <div key={nanoid()}>
                 {eachPhone.id}
                 {eachPhone.name}
                 <img src={eachPhone.imageAddress}></img>

                </div>  
            )
        })}
        
        </>
    )
}