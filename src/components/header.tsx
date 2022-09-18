import '../css/header.css';
import { useAppSelector } from '../features/hooks';
import SmartphoneIcon from '../icons/smartphone-icon.svg';
import ShoppingCartIcon from '../icons/shopping-cart-icon.svg';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {

    
    const numberOfItemsInShoppingCart = useAppSelector((state) => state.shoppingCartReducer.numberOfItems)

    return (
        <>
            <div className='header-container'>
                <div id='webpage-name'>
                    <h1 id='page-name-txt'>
                        <img src={SmartphoneIcon} alt={'Smartphone Icon'} draggable={false}></img>Tech Store
                    </h1>
                </div>

                <div>
                    <div className='shopping-cart-wrapper'>
                    <Link to="/shopping-cart"><img src={ShoppingCartIcon} alt={'Shopping Cart Icon'} draggable={false}></img></Link>
                    <motion.p animate={{scale:[0, 0.8, 1]}}id='number-of-items'>{numberOfItemsInShoppingCart > 99 ? '99+': numberOfItemsInShoppingCart}</motion.p>
                    
                    </div>
                </div>
            </div>
        </>
    )
};