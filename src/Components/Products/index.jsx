import data from '../../productData.json';
import Product from '../Product/index';

const Products = () => {
  //map through product data and pass individual products to product component
  return <div> {data.products.map(product => <Product key={product.name} product={product}/>)}
    </div>
  
}

export default Products