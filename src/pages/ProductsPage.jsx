import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

function ProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <section>
            <h1>Prodotti</h1>
            <div className="prodotti-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductsPage;