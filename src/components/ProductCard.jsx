import { Link } from 'react-router';

function ProductCard({ product }) {
    return (
        <Link to={`/prodotti/${product.id}`} className="prodotto-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price.toFixed(2)} €</p>
        </Link>
    );
}

export default ProductCard;