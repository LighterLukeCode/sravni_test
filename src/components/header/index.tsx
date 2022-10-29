import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className={styles.content}>
          <a href="#" className={styles.logo}>
            conduit
          </a>
          <ul className={styles.nav_bar}>
            <li className={styles.nav_item}>
              <a href="#" className={styles.nav_link}>
                Home
              </a>
            </li>
            <li className={styles.nav_item}>
              <a href="#" className={styles.nav_link}>
                Sign in
              </a>
            </li>
            <li className={styles.nav_item}>
              <a href="#" className={styles.nav_link}>
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
