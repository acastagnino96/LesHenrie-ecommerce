import { BsCart2 } from 'react-icons/bs';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const ctx = useContext(CartContext);

    return (
        <Link className="cartGroup" to='/cart' style={{textDecoration: "none"}}>
            <BsCart2 className="cartIcon"/>
            <button className="cartNumber btn">{ctx.calcItemsQty()}</button>
            </Link>
    );
}

export default CartWidget;