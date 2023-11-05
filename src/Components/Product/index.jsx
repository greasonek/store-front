// import data from '../../productData.json';
import { Button, Card, CardActions, CardContent, Grid, Typography } from  '@mui/material';
import { useDispatch } from 'react-redux';
import cartSlice from '../../Store/cartSlice';
import productSlice, { updateProduct } from '../../Store/productSlice';

const Product = ({product}) => {
  // define the dispatch  
  const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch the action to update the selectedProduct
    // like setting state but we ask the store to do it
    // dispatch the action and pass the action the payload
    dispatch(productSlice.actions.showProduct(product));
  };
  const handleAddToCart = (product) => {
    dispatch(cartSlice.actions.addToCart(product));
    dispatch(updateProduct({product, amount: -1}))
    dispatch(productSlice.actions.reduceStock(product));
  }

  return (
    <>
    <Grid item xs={3}>
    <Card>
      {/* <CardMedia
        sx={{ height: 220 }}
        image={product.image_url}
        title={product.name}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {` in ${product.category}`}

        </Typography>
      </CardContent>
      <CardActions>
        {product.unavailable ? 
        <Button disabled={product.unavailable}>Out of Stock</Button> : <Button size="small" 
          onClick={() => {handleAddToCart(product)}}
          variant='outlined'
          color='success'
          disabled={product.inStock === 0}>Add to Cart
        </Button>}
        <Button size="small" onClick={handleClick} variant='outlined' color='success'>View Details</Button>

      </CardActions>
    </Card>
    </Grid>
    </>
    
  )
}

export default Product