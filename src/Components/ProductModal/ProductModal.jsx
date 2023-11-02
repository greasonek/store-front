import { Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../Store/products";
import cartSlice from "../../Store/cart";

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
        image={selectedProduct.image_url}
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
        {selectedProduct.unavailable ? <Button disabled={selectedProduct.unavailable}>Out of Stock</Button> : <Button size="small" onClick={() => handleAddToCart(selectedProduct)} variant='outlined' color='success' fullWidth>Add to Cart</Button>}
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