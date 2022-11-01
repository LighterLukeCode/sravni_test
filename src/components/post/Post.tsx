import Sort from "../sort/Sort";
import styles from "./post.module.scss";
import heart from "./../../assets/heart.png";
import { useAppSelector } from "../../redux/hooks";
import { Post as IPost } from "../../interfaces/Post";
import { Link } from "react-router-dom";

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

        <Link to={`/article/${post.slug}`}>
          <h3 className={styles.title}>{post.title}</h3>
        </Link>
        <Link to={`/article/${post.slug}`}>
          <p className={styles.description}>{post.description}</p>{" "}
        </Link>
        <div className={styles.post_footer}>
          <Link to={`/article/${post.slug}`}>
            {" "}
            <span className={styles.more}>Read more...</span>
          </Link>
          <ul className={styles.tags_list}>
            {post.tagList.map((tag, i) => (
              <li key={i} className={styles.tag_item}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
