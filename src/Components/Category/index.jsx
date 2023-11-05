import { Button, Card, CardActions, CardContent, Grid, Typography } from  '@mui/material';
import { useDispatch } from 'react-redux';
import categorySlice from '../../Store/categoriesSlice';

const Category = ({category}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(categorySlice.actions.showCategory(category));
  }

  return (
    <Grid item xs={3}>
    <Card>
    {/* <CardMedia
      sx={{ height: 220 }}
      image={category.image_url}
      title={category.displayName}
    /> */}
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {category.displayName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Click to see all {category.name}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={handleClick} variant='outlined' color='success'>{`Select ${category.name}`}</Button>
    </CardActions>
  </Card>
  </Grid>
  )
}

export default Category