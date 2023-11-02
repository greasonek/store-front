import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../../Store/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.cart.showCart);
  const handleClick = () => {
    dispatch(cartSlice.actions.showCart(true))
  }
  return (
    <div>
      <IconButton color='success' onClick={handleClick}>
        <ShoppingCartIcon/>
        {showCart.productsInCart}
      </IconButton>
    </div>
  )
}

export default Cart;


