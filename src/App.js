import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
