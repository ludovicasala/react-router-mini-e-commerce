import { Link } from 'react-router';

function ProductCard({ product }) {
  return (
    <Link to={`/prodotti/${product.id}`} className="prodotto-card">
      <div className="prodotto-img-box">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="prodotto-info">
        <div>
          <p className="prodotto-categoria">{product.category}</p>
          <h2>{product.title}</h2>
        </div>
        <div className="prodotto-footer">
          <span className="prodotto-prezzo">
            {Number(product.price).toFixed(2)} €
          </span>
          <span className="prodotto-cta">Dettagli</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;