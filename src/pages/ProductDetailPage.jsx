import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <section>
                <p>Caricamento dettaglio...</p>
            </section>
        );
    }

    if (!product || !product.id) {
        return (
            <section>
                <p>Prodotto non trovato.</p>
                <Link to="/prodotti">Torna ai prodotti</Link>
            </section>
        );
    }

    return (
        <section className="dettaglio-prodotto">
            <Link to="/prodotti" className="link-indietro">
                ← Torna ai prodotti
            </Link>
            <div className="dettaglio-contenuto">
                <img src={product.image} alt={product.title} />
                <div>
                    <p className="dettaglio-categoria">{product.category}</p>
                    <h1>{product.title}</h1>
                    <p className="dettaglio-prezzo">{product.price.toFixed(2)} €</p>
                    <p className="dettaglio-descrizione">{product.description}</p>
                </div>
            </div>
        </section>
    );
}

export default ProductDetailPage;