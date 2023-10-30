import Header from "./Components/Header";
// import Browse from "./Components/Browse/Browse";
import Footer from './Components/Footer';
import Categories from "./Components/Categories";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from "./Components/Products";
import ProductModal from "./Components/ProductModal/ProductModal";

function App() {
  return (
    <>
      <div>
      <Header />
      <Categories/>
      {/* <Browse/> */}
      <Products/>
      <ProductModal/>
      <Footer />
      </div>

      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<App/>}/> */}
          <Route path='/electronics' element={<Categories/>} />
          <Route path='/clothing' element={<Categories/>} />
          <Route path='/food' element={<Categories/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
