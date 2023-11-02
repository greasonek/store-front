import Header from "./Components/Header";
import Footer from './Components/Footer';
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import ProductModal from "./Components/ProductModal/ProductModal";
import CartModal from "./Components/CartModal";

function App() {
  return (
    <>
      <div>
      <Header />
      <CartModal/>
      <Categories/>
      <Products/>
      <ProductModal/>
      <Footer />
      </div>
    </>
  )
}

export default App
