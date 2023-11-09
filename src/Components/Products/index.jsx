import { useSelector } from 'react-redux';
import Product from '../Product/index';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../Store/productSlice';
import { useEffect } from 'react';

const Products = () => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category.selectedCategory)
  console.log(category);

  const listOfProducts = useSelector((state) => state.product.listOfProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
      <Grid container spacing = {2} marginTop={"16px"}>
      {listOfProducts.filter(p => p.category === category?.name).map(product => <Product key={product._id} product={product}/>)}
      </Grid>
  )
}

export default Products