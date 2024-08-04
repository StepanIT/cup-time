import { Link, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";

export const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const { categories } = useProducts();
  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get("category" ,);

    return currentCategory === category ? "active" : ""
  }

  return (
    <header className="header">
    <div className="container header__container">
      <Link to="/" className="header__logo-link">
        <img src="image/logo.svg" alt="логотип Cup Time" className="header__logo"/>
      </Link>
  
      <nav className="header__nav">
        <ul className="header__menu">
        {Object.entries(categories).map(([key, value]) => (
          <li key={key} className="header__menu-item">
            <Link
             className={`header__menu-link ${getActiveClass(key)}`}
             to={`/products?category=${key}`}>
             {value}
             </Link>
          </li>
        ))}
        </ul>
      </nav>
      <Link to="cart" className="header__cart-link">{cart ? cart.reduce((acc, item) => item.quantity + acc, 0) : 0}</Link>
    </div>
   </header>
  )
}