import Header from "../Header";
import CartModal from "../CartModal";
import Categories from "../Categories";
import Products from "../Products";
import ProductModal from "../ProductModal/ProductModal";
import Footer from "../Footer";

const StoreFront = () => {
  return (
    <div>
      <Header />
      <CartModal />
      <Categories />
      <Products />
      <ProductModal />
      <Footer />
    </div>
  )
}

export default StoreFront