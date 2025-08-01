import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/Logo.svg";
import Container from "../Container/Container.jsx";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <NavLink to="/" className={css.logo}>
            <img src={logo} alt="Renault logo" className={css.img} />
          </NavLink>

          <div className={css.navlink}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : css.link)}
            >
              Home
            </NavLink>
            <NavLink
              to="/catalog"
              className={({ isActive }) => (isActive ? css.active : css.link)}
            >
              Catalog
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
}
