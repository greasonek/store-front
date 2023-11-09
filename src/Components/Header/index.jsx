import { AppBar, Toolbar, Typography } from "@mui/material"
import Cart from "../Cart"

const Header = () => {
  return (
    <AppBar position="static" color='default' style={{ padding: "8px" }}>
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          OUR STORE
        </Typography>
        <Cart />
      </Toolbar>
    </AppBar>  )
}

export default Header