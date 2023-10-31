# Store Front

## Author: Emily Greason

### Technical Requirements

- Create a visually appealing site using Material UI.
- Use a Redux Store to manage the state of categories and items in the store.
- Display a list of categories from state.
- When the user selects (clicks on) a category:
- Identify that category as selected (change of class/display).
- Show a list of products associated with the category.

### Notes on Redux

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

### Installs

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
add 'react/prop-types': ['off'] to rules
npm i @reduxjs/toolkit react-redux
be careful with naming conventions {beast vs beasts etc}

#### Start

npm run dev
