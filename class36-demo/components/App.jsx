import Header from './header';
import Footer from './footer';
import Beast from './beast';
import { useSelector} from 'react-redux';

const App = () => {
  const selectedBeast = useSelector(state => state.beast.selectedBeast);
  return (
  <div>
    {selectedBeast && selectedBeast.title}
    <Header/>
    <Beast />
    <Footer/>
  </div>
  )
}

export default App;