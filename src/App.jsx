import { BrowserRouter, Routes, Route} from 'react-router-dom';
import StoreFront from "./Components/StoreFront";
import ShoppingCart from "./Components/ShoppingCart";
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
   
      <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<StoreFront />} />
          <Route path='/details' element={<ProductDetails />}/>
          <Route path='/checkout' element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
      </>

  )
}

export default App
