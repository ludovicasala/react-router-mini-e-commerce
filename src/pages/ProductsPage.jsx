import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { usePriceFilter } from '../contexts/PriceFilterContext';

function ProductsPage() {

    const [products, setProducts] = useState([]);
    const { maxPrice } = usePriceFilter();

    console.log('maxPrice:', maxPrice);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const hasMaxPrice = maxPrice !== null && maxPrice !== '' && !Number.isNaN(Number(maxPrice));

  const visibleProducts = hasMaxPrice
    ? products.filter((product) => Number(product.price) <= Math.trunc(Number(maxPrice)))
    : products;

    return (
        <section>
            <div className="catalogo-header">
         <h1>Prodotti</h1>
        <span className="catalogo-count">{visibleProducts.length} articoli</span>
      </div>
            <div className="prodotti-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductsPage;