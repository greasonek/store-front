import { Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import productSlice, { updateProduct} from "../../Store/productSlice";
import cartSlice from "../../Store/cartSlice";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  padding: 10,
};


const ProductModal = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct)
  const dispatch = useDispatch();
  const handleClose = () => {
    // dispatch the action to update the selectedProduct
    // like setting state but we ask the store to do it
    // dispatch the action and pass the action the payload
    dispatch(productSlice.actions.showProduct(undefined));
  };
  const handleAddToCart = (selectedProduct) => {
    dispatch(cartSlice.actions.addToCart(selectedProduct));
    dispatch(updateProduct({ selectedProduct, amount: -1}));
    dispatch(productSlice.actions.reduceStock(selectedProduct));
  }

  return (
    <Modal
    open={selectedProduct != undefined}
    onClose={handleClose}
  >
      {selectedProduct ? (
      <Card style={style}>
      <CardMedia
        sx={{ height: 220 }}
        image={`http://source.unsplash.com/random?${selectedProduct.name}`}
        title={selectedProduct.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {selectedProduct.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`$${selectedProduct.price} - ${selectedProduct.inStock} in stock`}
        </Typography>
      </CardContent>
      <CardActions>
        {selectedProduct.unavailable ? 
        <Button disabled={selectedProduct.unavailable}>Out of Stock</Button> : 
        <Button size="small" 
          onClick={() => {
            handleAddToCart(selectedProduct)}} 
          variant='contained' 
          color='success' 
          >Add to Cart</Button>}
        <Link to={'/details'} style={{textDecoration:'none'}}>
          <Typography 
            style={{backgroundColor: 'gray', 
              color: 'white', 
              border: '1px solid gray', 
              padding: '3px',
              margin: '5px', 
              borderRadius: '5px'}}>View Details
          </Typography>
          </Link>
        <Button size="small" onClick={handleClose} variant='outlined' color='success'>Close</Button>
      </CardActions>
    </Card> 
    ) : ( 
    <></>
    )}
  </Modal>
  )
}

export default ProductModal