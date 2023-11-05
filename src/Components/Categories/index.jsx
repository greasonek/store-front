// import { useSelector } from 'react-redux';
import Category from '../Category';
import { Grid } from '@mui/material'
// import data from '../../productData.json'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../Store/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const listOfCategories = useSelector((state) => state.category.listOfCategories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  
  return (
    <>
      <Grid container spacing = {2} marginTop={"16px"} marginBottom={"50px"}>
        {listOfCategories.map(category => <Category key={category.name} category={category}/>)}
      </Grid>
    </>
  )
}

export default Categories;