import { Link } from 'react-router';

function HomePage() {
    return (
        <section className="home-hero">
            <h1>Benvenuti su MiniShop</h1>
            <p>Scopri una selezione di prodotti disponibili nel catalogo.</p>
            <img
                src="https://fashionista.com/.image/MTM5NDU0OTMzODExMzQwNDUy/kl1_0420.jpg.jpg?profile=w2560&x=50&y=50"
                alt="Interno minimalista di uno store"
            />
            <Link to="/prodotti" className="home-cta">
                Vai ai prodotti
            </Link>
        </section>
    );
}

export default HomePage;