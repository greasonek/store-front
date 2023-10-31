import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import productSlice from '../../Store/products'

const Browse = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.displayName)
  const handleChange = (e) => {
    dispatch(productSlice.actions.selectedCategory(e.target.value))
  }
  return (
    <FormControl fullWidth>
        <InputLabel id="type-of-category-label">Browse Categories</InputLabel>
        <Select
          labelId="type-of-category-label"
          id="type-of-category"
          value={categories}
          label="Categories"
          onChange={handleChange}
        >
          <MenuItem value={'All'}>All</MenuItem>
          <MenuItem value={'Electronics'}>Electronics</MenuItem>
          <MenuItem value={'Clothing'}>Clothing</MenuItem>
          <MenuItem value={'Food'}>Food</MenuItem>

        </Select>
      </FormControl>
  )
}

export default Browse