// import data from '../../productData.json';
import { useSelector } from 'react-redux';
import Product from '../Product/index';
import { Grid } from '@mui/material'

const Products = () => {
  //map through product data and pass individual products to product component
  const productData = useSelector(state => state.product.productData)
  return (
      <Grid container spacing = {2} marginTop={"16px"}>
      {productData.products.map(product => <Product key={product.name} product={product}/>)}
      </Grid>
  )
}

export default Products