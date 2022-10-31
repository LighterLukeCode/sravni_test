import Sort from "../sort/Sort";
import styles from "./post.module.scss";
import heart from "./../../assets/heart.png";
import { useAppSelector } from "../../redux/hooks";
import { Post as IPost } from "../../interfaces/Post";

interface Props {
  post: IPost;
}
const Post = ({ post }: Props) => {
  return (
    <div className="container_post">
      <div className={styles.post}>
        <div className={styles.info}>
          <div className={styles.info_author}>
            <a href="#">
              <img className={styles.avatar} src={post.author.image} alt="avatar" />
            </a>
            <div className={styles.author}>
              <a href="#" className={styles.name}>
                {post.author.username}
              </a>
              <span className={styles.date}>{post.createdAt.replace("T", " ").slice(0, 16)}</span>
            </div>
          </div>
          <button className={styles.favorite}>
            <img className={styles.heart} src={heart} alt="heart" />
            {post.favoritesCount}
          </button>
        </div>
        <a href="#" className="preview">
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.description}>{post.description}</p>
          <div className={styles.post_footer}>
            <span className={styles.more}>Read more...</span>
            <ul className={styles.tags_list}>
              {post.tagList.map((tag, i) => (
                <li key={i} className={styles.tag_item}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Post;
