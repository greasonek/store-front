# Store Front

## Author: Emily Greason

### Technical Requirements **LAB36**

- Create a visually appealing site using Material UI.
- Use a Redux Store to manage the state of categories and items in the store.
- Display a list of categories from state.
- When the user selects (clicks on) a category:
- Identify that category as selected (change of class/display).
- Show a list of products associated with the category.

### Notes on Redux **LAB36**

- Categories
  - State should contain a list of categories as well as the active category.
    - Each category should have a normalized name, display name, and a description.
  - Create an action that will trigger the reducer to change the active category.
  - Update the active category in the reducer when this action is dispatched.
- Products
  - State should be a list of all products.
    - Each product should have a category association, name, description, price, inventory count.
  - Create an action that will trigger when the active category is changed.
    - HINT: Multiple reducers can respond to the same actions.
  - Create a reducer that will filter the products list based on the active category.
- Active Category
  - State should store active category.
    - Other components (products, etc) might need to reference this.

- ### Technical Requirements **LAB37**

- Add a new component to the page: < SimpleCart />
  - Displays a short list (title only) of products in the cart.
  - This should be present at all times.
- Home Page Operation:
  - When the user selects (clicks on) a category:
    - Identify that category as selected.
    - Show a list of products associated with the category, that have a quantity > 0.
    - Add an “add to cart” button to each product.
  - When a user clicks the “add to cart” button add the item to their cart:
    - In the < SimpleCart /> component, show a running list of the items in the cart (just the titles).
    - Change the (0) indicator in the header to show the actual number of items in the cart.
    - Reduce the number in stock for that product.

### Notes on Redux **LAB37**

- Categories
  - State should be a list of categories as well as the active one.
    - Each category should have a normalized name, display name, and a description.
  - Create an action that will trigger the reducer to change the active category.
  - Update the active category in the reducer when this action is dispatched.
- Products
  - State should be a list of all products.
    - Each product should have a category association, name, description, price, inventory count.
  - Create an action that will trigger the reducer to filter the product list when the active category is changed.
    - Hint: Different reducers can respond to the same actions.
  - Create a reducer that will filter the products list based on the active category.
  - Create an action that will trigger the reducer to reduce the stock counter.
  - Create a reducer that reduces the # in stock when that action is dispatched.
- Cart
  - State should be an array of products that have been added (all product details).
  - Create an action that will trigger the reducer to add the selected item to the cart.
    - Hint: this could be the same action type as you create for the Products reducer.
  - Create a reducer that adds the product to the array of items in state.

### Technical Requirements **LAB38**

- Load the category and product list from a remote API on page load.
- Update the product quantity in stock when adding items to (or removing from) the cart.
- Continue to use multiple reducers.
- You will need to use useEffect() to dispatch a load action on the initial page load.
  - This will need to use thunk as it will be asynchronous.
- When adding/removing/updating products in the cart, the action/reducer will need to update the product on the server.
  - Perform the appropriate post, put, or delete via API call (using thunk in an async action) on each of these actions as performed by the users.

### Technical Requirements **LAB39**

- Add routing to the application.
- Link every product to a page that displays the full product details.
- Link the “Cart” summary in the header to a full shopping cart page with shipping/payment forms.
- Additionally, we will be swapping out our Redux store and replacing it with a store built using Redux Toolkit.

- Add < BrowserRouter /> to your application.
  - Create a < Storefront /> component to contain all of the components viewable form the / route.
- Create a new page component: < ProductDetails />.
  - Alter each product on the listing screen to have a new “Product Details” button.
  - When clicked, < Link to...> /products/## where ## is the product ID.
  - On this page, show an expanded view of the product, including placeholders for additional information such as reviews, suggestions, etc.
- Create a new page component: < ShoppingCart />
  - Link to this page from the Cart (x) in the header, on the /cart route.
  - On this page, show:
    - A summary of items in tabular format.
    - A final order total.
    - A form allowing the user to enter their billing/shipping address and credit card information.
    - On submit, simply draw an alert that says “Thank you for your purchase”
      - We will not be processing transactions or storing orders just yet.

### Installs

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
add 'react/prop-types': ['off'] to rules
npm i @reduxjs/toolkit react-redux
be careful with naming conventions {beast vs beasts etc}

#### Start

npm run dev

*** ADD JEST AND BABEL THINGS NPM I, ADD SETUPTESTS.JS
