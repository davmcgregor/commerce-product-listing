import ProductsContextProvider from './context/ProductsContext';

import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

import './App.css';

const App = () => {
  return (
    <ProductsContextProvider>
      <article className="App">
        <div className="app__wrapper">
          <Header />
          <ProductList />
        </div>
      </article>
    </ProductsContextProvider>
  );
};

export default App;
