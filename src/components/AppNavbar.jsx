import { NavLink } from 'react-router';

function AppNavbar() {

    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/prodotti">Prodotti</NavLink>
        </header>
    );

}

export default AppNavbar;