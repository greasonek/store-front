import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../../Store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const handleClick = () => {
    dispatch(cartSlice.actions.showCart(true))
  }
  return (
    <div>
      <IconButton color='success' onClick={handleClick}>
        <ShoppingCartIcon/>
        {cart.length}
      </IconButton>
    </div>
  )
}

export default Cart;


