import { Button,Dialog, DialogActions, DialogTitle, DialogContent, Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React, { useEffect } from "react";
// import { Popover } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../../Store/cartSlice";
import { updateProduct} from "../../Store/productSlice";
import { deleteProduct } from "../../Store/cartSlice";
import { Link } from 'react-router-dom';


const CartModal = () => {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.cart.showCart);
  const cartContents = useSelector(state => state.cart.cart);
  const total = cartContents.reduce((acc, selectedProduct) => acc + selectedProduct.price, 0);
  // const anchorEl = document.getElementById("anchor");
// const [cartAnchorEl, setCartAnchorEl] = useState(null);

  // const listOfProducts = useSelector((state) => state.selectedProduct.listOfProducts);
  useEffect(() => {
    dispatch(deleteProduct());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(cartSlice.actions.showCart(false))
  }

  // const handleDeleteProduct = ({selectedProduct}) => {
  //   dispatch(updateProduct({selectedProduct, amount: +1}))
  //   dispatch(cartSlice.actions.deleteProduct(selectedProduct));
  // }
  const handleDeleteProduct = (selectedProduct, index) => {
    dispatch(cartSlice.actions.deleteProduct(index));
    dispatch(updateProduct({ product: selectedProduct, amount: +1}))
  }


  return (
    
      <Dialog open={showCart}>
        <DialogTitle>CART</DialogTitle>
        <DialogContent>
        {cartContents.map((selectedProduct, index) => (
          <React.Fragment key={index}>
            <ListItem style={{ marginBottom: '10px' }}>
              <ListItemAvatar>
              <Avatar 
                variant='square' 
                alt={selectedProduct.name} 
                src={`http://source.unsplash.com/random?${selectedProduct.name}`} 
                sx={{ width: 80, height: 80, marginRight: '10px' }}/>
              </ListItemAvatar>
              <ListItemText primary={selectedProduct.name}/>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography style={{padding: '20px'}}> ${selectedProduct.price} </Typography>
                <Button 
                  variant="outlined" 
                  color="error" 
                  onClick={() => handleDeleteProduct(index)}
                  style={{ marginLeft: '10px' }}
                  >
                  Remove
                </Button>
                </div>
            </ListItem>
            {selectedProduct.displayName}
            <ListItemText>
            </ListItemText> 
            
          </React.Fragment>
        ))}
        </DialogContent>
        <Typography margin={"20px"} variant='h6'>Total: ${total}</Typography>
        <DialogActions>
          <Link to={"/checkout"} component='button' variant='body2' style={{textDecoration:'none'}}>
            <Typography style={{backgroundColor: 'green', color: 'white', border: '2px solid green', padding: '5px', borderRadius: '5px'}}>Checkout</Typography>
          </Link>

        <Button onClick={handleClose} variant="outlined" color="success">Close</Button>
      </DialogActions>
      </Dialog>

    //   <Popover
    //   open={Boolean(cartAnchorEl)}
    //   anchorEl={cartAnchorEl}
    //   onClose={handleClose}
    //   anchorOrigin={{
    //     vertical: 'bottom',
    //     horizontal: 'right',
    //   }}
    //   transformOrigin={{
    //     vertical: 'top',
    //     horizontal: 'right',
    //   }}
    // >
    // </Popover>
 
  )
}

export default CartModal