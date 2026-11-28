import { BrowserRouter, Route, Routes } from 'react-router';
import { PriceFilterProvider } from './contexts/PriceFilterContext';

import AppNavbar from './components/AppNavbar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <PriceFilterProvider>
    <BrowserRouter>
      <AppNavbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/prodotti" element={<ProductsPage />} />
          <Route path="/prodotti/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
    </BrowserRouter >
    </PriceFilterProvider>
  );
}

export default App;