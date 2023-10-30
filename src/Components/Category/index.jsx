import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from  '@mui/material';
// import { useDispatch } from 'react-redux';
// import productSlice from '../../Store/products';

const Category = ({category}) => {

  const handleClick = () => {

  }

  return (
    <Grid item xs={3}>
    <Card>
    <CardMedia
      sx={{ height: 220 }}
      image={category.image_url}
      title={category.displayName}
    />
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