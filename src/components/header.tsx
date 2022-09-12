import '../css/header.css';
import SmartphoneIcon from '../icons/smartphone-icon.svg';
import ShoppingCartIcon from '../icons/shopping-cart-icon.svg';

export default function Header() {

    let shoppingCartNumber = 55

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
                    <img src={ShoppingCartIcon} alt={'Shopping Cart Icon'} draggable={false}></img>
                    <p id='number-of-items'>{shoppingCartNumber > 99 ? '99+': shoppingCartNumber}</p>
                    </div>
                </div>
            </div>
        </>
    )
};