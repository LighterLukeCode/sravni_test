import styles from "./header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            conduit
          </Link>
          <ul className={styles.nav_bar}>
            <li className={styles.nav_item}>
              <Link to="/" className={styles.nav_link}>
                Home
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link to="/login" className={styles.nav_link}>
                Sign in
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link to="/register" className={styles.nav_link}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
