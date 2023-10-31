import Header from "./Components/Header";
// import Browse from "./Components/Browse/Browse";
import Footer from './Components/Footer';
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import ProductModal from "./Components/ProductModal/ProductModal";
// import Browse from "./Components/Browse/Browse";

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
    </>
  )
}

export default App
