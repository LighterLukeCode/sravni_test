import { useAppSelector } from "../../redux/hooks";
import styles from "./tags.module.scss";

const Tags = () => {
  const { tags } = useAppSelector(state => state.tagSlice.items);

  return (
    <div className="container_sideBar">
      <div className={styles.sideBar}>
        <p className={styles.title}>Popular Tags</p>
        <div className="tags_list">
          {tags.map((tag, i) => (
            <a key={i} href="#" className={styles.tag_item}>
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
