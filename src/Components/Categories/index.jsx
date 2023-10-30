// import { useSelector } from 'react-redux';
import Category from '../Category';
import { Grid } from '@mui/material'
import data from '../../productData.json'

const Categories = () => {
  return (
    <>
      <Grid container spacing = {2} marginTop={"16px"} marginBottom={"50px"} marginLeft={'auto'}>
        {data.categories.map(category => <Category key={category.name} category={category}/>)}
      </Grid>
    </>
  )
}

export default Categories;