import { Button, Typography, Card, CardMedia, CardActions, CardContent } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import productSlice, { updateProduct} from "../../Store/productSlice";
import cartSlice from "../../Store/cartSlice";
import Header from "../Header";
import CartModal from "../CartModal";
import { Link } from "react-router-dom";


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

const ProductDetails = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct)
  const dispatch = useDispatch();
  
  const handleAddToCart = (selectedProduct) => {
    dispatch(cartSlice.actions.addToCart(selectedProduct));
    dispatch(updateProduct({ selectedProduct, amount: -1}));
    dispatch(productSlice.actions.reduceStock(selectedProduct));
  }
  
  return (
    <div>
      <Header/>
      <CartModal />

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
      <Link to='/' style={{textDecoration:'none'}}>
        <Typography 
          style={{ 
            color: 'green', 
            margin: '10px', 
            padding: '3px', 
            border: '1px solid green', 
            borderRadius: '5px'}}
            >
            Keep Shopping
        </Typography>
      </Link>
      </CardActions>
    </Card>
        ) : ( 
          <></>
          )}
    </div>
  )
}

export default ProductDetails
