import { Button,Dialog, DialogActions, DialogTitle, DialogContent, Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React from "react";
// import { Popover } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../../Store/cart";

const CartModal = () => {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.cart.showCart);
  const cartContents = useSelector(state => state.cart.cart);
  const total = cartContents.reduce((acc, selectedProduct) => acc + selectedProduct.price, 0);
  // const anchorEl = document.getElementById("anchor");

  const handleClose = () => {
    dispatch(cartSlice.actions.showCart(false))
  }

  const deleteItem = () => {
    dispatch(cartSlice.actions.deleteItem(selectedProduct))
  }

  return (
    
      <Dialog open={showCart}>
        <DialogTitle>CART</DialogTitle>
        <DialogContent>
        {cartContents.map((selectedProduct, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemAvatar>
              <Avatar alt={selectedProduct.name} src={selectedProduct.image_url}/>
              </ListItemAvatar>
              <ListItemText primary={selectedProduct.name}/>
              <Typography> 
                 ${selectedProduct.price}
                <Button variant="outlined" color="error" onClick={deleteItem}>X</Button>
                </Typography>
                <hr/>
            </ListItem>
            {selectedProduct.displayName}
            <ListItemText>
            </ListItemText> 
            
          </React.Fragment>
        ))}
        </DialogContent>
        <Typography margin={"20px"}>Total: ${total}</Typography>
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