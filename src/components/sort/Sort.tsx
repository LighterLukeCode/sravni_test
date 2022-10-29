import styles from "./sort.module.scss";

const Sort = () => {
  return (
    <div className="container">
      <ul className={styles.nav_bar}>
        <li className="nav_item">
          <a href="#" className={styles.nav_link}>
            Global Feed
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
