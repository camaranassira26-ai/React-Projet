import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>✦ StreetWear</h1>
            <div className={styles.links}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>Home</NavLink>
                <NavLink to="/catalogue" className={({ isActive }) => isActive ? styles.active : styles.link}>Catalogue</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : styles.link}>Contact</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;