import Header from "../Header"
import { Box, Button, Card, TextField, Typography, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import React from 'react';

const ShoppingCart = () => {
  const cartContents = useSelector(state => state.cart.cart);
  const total = cartContents.reduce((acc, selectedProduct) => acc + selectedProduct.price, 0);

const cardStyle = {
  maxWidth: '500px',
  margin: 'auto',
  marginTop: '30px',
  padding: '50px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column', 
};

const orderSummary = {
  fontSize: '38px',
  marginBottom: '10px',
  padding: '5px'
};

const flexContainer = {
  display: 'flex',
  justifyContent: 'space-between',
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '20px',};

  return (
    <>
    <Header/>
    <Card style={cardStyle}>
    <Typography variant="h4" style={orderSummary}>Order Summary</Typography>
    {cartContents.map((selectedProduct, index) => (
          <React.Fragment key={index}>
            <ListItem key={index}>
              <ListItemText primary={selectedProduct.name}/>
              <Typography> 
                 ${selectedProduct.price}
              </Typography>
                <hr/>
            </ListItem>
            {selectedProduct.displayName}
            <ListItemText>
            </ListItemText> 
            
          </React.Fragment>
          ))}
      <Typography marginBottom={"30px"} marginTop={'30px'} variant='h6'>Total: ${total}</Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
          <div style={flexContainer}>
        <div>
          <Typography variant="h5">Billing Address</Typography>
          <TextField
            required
            id="name"
            label="Name"
            defaultValue=""
            variant="standard" />
          <TextField
            required
            id="address"
            label="Address"
            defaultValue=""
            variant="standard" />
          <TextField
            required
            id="city"
            label="City"
            defaultValue=""
            variant="standard" />
          <TextField
            required
            id="state"
            label="State"
            defaultValue=""
            variant="standard" />
          <TextField
            required
            id="zip"
            label="Zip"
            defaultValue=""
            variant="standard" />
            </div>
            <div>
          <Typography variant="h5">Payment Details</Typography>
          <TextField
            required
            id="card-number"
            label="Credit Card Number"
            defaultValue=""
            variant="standard" />
          <TextField
            required
            id="exp-date"
            label="Expiration Date (DD/MM/YYYY)"
            defaultValue=""
            variant="standard" />
          <TextField
            id="cvv"
            label="CVV"
            type="password"
            autoComplete=""
            variant="standard"/>
            </div>
        </div>
      </Box>
      <div style={buttonContainer}>
      <Button variant='contained' color='success'>Place Your Order</Button>
      <Link to='/' style={{textDecoration:'none'}}>
        <Typography 
          style={{ 
            color: 'green', 
            margin: '10px', 
            padding: '5px', 
            border: '2px solid green', 
            borderRadius: '5px'}}
            >
            Keep Shopping</Typography>
        </Link>
      </div>
      </Card>
      </>
      )
  }
export default ShoppingCart