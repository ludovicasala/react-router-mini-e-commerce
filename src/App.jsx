import { BrowserRouter, Route, Routes } from 'react-router';

import AppNavbar from './components/AppNavbar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/prodotti" element={<ProductsPage />} />
        </Routes>
      </main>
    </BrowserRouter >
  );
}

export default App;