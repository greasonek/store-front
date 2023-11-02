import { Button,Dialog, DialogActions, DialogTitle, DialogContent } from "@mui/material"
// import { Popover } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../../Store/cart";

const CartModal = () => {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.cart.showCart);
  // const anchorEl = document.getElementById("anchor");

  const handleClose = () => {
    dispatch(cartSlice.actions.showCart(false))
  }

  return (
    
      <Dialog open={showCart}>
        <DialogTitle>CART</DialogTitle>
        <DialogContent>
        {showCart.productsInCart}
        </DialogContent>
        <DialogActions>
        <Button variant="outlined" color="success" fullWidth>Checkout</Button>
        <Button onClick={handleClose} variant="outlined" color="success">Close</Button>
      </DialogActions>
      </Dialog>

      // <Popover
      //   open={showCart}
      //   onClose={handleClose}
      //   anchorEl ={anchorEl} 
      //   anchorOrigin={{
      //     vertical: 'buttom',
      //     horizontal: 'left',
      //   }}
      //   transformOrigin={{
      //     vertical: 'top',
      //     horizontal: 'right',
      //   }}>
      //   <p>{showCart}</p>
      // </Popover>
 
  )
}

export default CartModal