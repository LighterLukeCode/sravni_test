import styles from "./tags.module.scss";

const Tags = () => {
  return (
    <div className="container_sideBar">
      <div className={styles.sideBar}>
        <p className={styles.title}>Popular Tags</p>
        <div className="tags_list">
          <a href="#" className={styles.tag_item}>
            implementations
          </a>
          <a href="#" className={styles.tag_item}>
            welcome
          </a>
          <a href="#" className={styles.tag_item}>
            introduction
          </a>
          <a href="#" className={styles.tag_item}>
            codebaseShow
          </a>
          <a href="#" className={styles.tag_item}>
            ipsum
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tags;
