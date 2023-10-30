// import data from '../../productData.json';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from  '@mui/material';
import { useDispatch } from 'react-redux';
import productSlice from '../../Store/products';

const Product = ({product}) => {
  // define the dispatch  
  const dispatch = useDispatch();
  const handleClick = () => {
    // dispatch the action to update the selectedProduct
    // like setting state but we ask the store to do it
    // dispatch the action and pass the action the payload
    dispatch(productSlice.actions.showProduct(product));
  };

  return (
    <>
    <Grid item xs={3}>
    <Card>
      <CardMedia
        sx={{ height: 220 }}
        image={product.image_url}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {` in ${product.category}`}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick} variant='outlined' color='success'>{`View ${product.name}`}</Button>
      </CardActions>
    </Card>
    </Grid>
    </>
    
  )
}

export default Product