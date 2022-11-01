import styles from "./fullPost.module.scss";
import React from "react";
import heart from "./../../assets/heart.png";
import plus from "./../../assets/plus.svg";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPost } from "../../redux/slice/postSlice";
import { fetchComments } from "../../redux/slice/commentsSlice";
import { Comment } from "../../interfaces/Comment";

const FullPost = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const { article } = useAppSelector(state => state.postSlice.item);
  const { comments } = useAppSelector(state => state.commentsSlice.items);

  React.useEffect(() => {
    dispatch(fetchComments(slug as string));
    dispatch(fetchPost(slug as string));
  }, []);

  if (!article) return <div />;

  return (
    <>
      <div className={styles.banner}>
        <div className="container">
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.info}>
            <div className={styles.info_author}>
              <a href="#">
                <img className={styles.avatar} src={article.author.image} alt="avatar" />
              </a>
              <div className={styles.author}>
                <a href="#" className={styles.name}>
                  {article.author.username}
                </a>
                <span className={styles.date}>{article.createdAt.replace("T", " ").slice(0, 16)}</span>
              </div>
            </div>
            <div className={styles.social}>
              <button className={styles.follow}>
                <img className={styles.plus} src={plus} alt="plus" />
                Follow {article.author.username}
              </button>
              <button className={styles.favorite}>
                <img className={styles.heart} src={heart} alt="heart" />
                Favorite Article ({article.favoritesCount})
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className={styles.text}>{article.body}</p>
        <ul className={styles.tags_list}>
          {article.tagList.map((tag, i) => (
            <li key={i}>
              <a className={styles.tag_item} href="#">
                {tag}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.info_second}>
          <div className={styles.info_author}>
            <a href="#">
              <img className={styles.avatar} src={article.author.image} alt="avatar" />
            </a>
            <div className={styles.author}>
              <a href="#" className={styles.second_name}>
                {article.author.username}
              </a>
              <span className={styles.date}>{article.createdAt.replace("T", " ").slice(0, 16)}</span>
            </div>
          </div>
          <div className={styles.social}>
            <button className={styles.follow}>
              <img className={styles.plus} src={plus} alt="plus" />
              Follow {article.author.username}
            </button>
            <button className={styles.favorite}>
              <img className={styles.heart} src={heart} alt="heart" />
              Favorite Article ({article.favoritesCount})
            </button>
          </div>
        </div>

        <div className={styles.comments_block}>
          <div className={styles.comments_container}>
            <p className={styles.social_text}>
              <Link className={styles.link} to="/login">
                Sign in
              </Link>{" "}
              or{" "}
              <Link className={styles.link} to="/register">
                sign up
              </Link>{" "}
              to add comments on this article.
            </p>
          </div>
          <div className={styles.comments_container}>
            {comments.map(comment => (
              <div key={comment.id} className={styles.comments}>
                <div className={styles.comments_content}>
                  <p className={styles.comments_text}>{comment.body}</p>
                </div>
                <div className={styles.comments_footer}>
                  <div className={styles.info_third}>
                    <a href="#">
                      <img className={styles.third_avatar} src={comment.author.image} alt="avatar" />
                    </a>
                    <a href="#" className={styles.third_name}>
                      {comment.author.username}
                    </a>
                    <span className={styles.third_date}>{comment.createdAt.replace("T", " ").slice(0, 16)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPost;
