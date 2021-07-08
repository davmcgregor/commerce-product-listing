import ProductsContextProvider from './context/ProductsContext';

import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

import './App.css';

const App = () => {
  return (
    <ProductsContextProvider>
      <div className="App">
        <Header />
        <ProductList />
      </div>
    </ProductsContextProvider>
  );
};

export default App;
