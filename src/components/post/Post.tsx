import styles from "./post.module.scss";

const Post = () => {
  return (
    <div className="container_post">
      <div className={styles.post}>
        <div className={styles.info}>
          <div className={styles.info_author}>
            <a href="#" className="avatar">
              <img src="https://api.realworld.io/images/demo-avatar.png" alt="avatar" />
            </a>
            <div className={styles.author}>
              <a href="#" className={styles.name}>
                gfdgfd gfdgdfg
              </a>
              <span className={styles.date}>October 9, 2022</span>
            </div>
          </div>
          <button className="favorite">
            <img src="#" alt="like" />
            44
          </button>
        </div>
        <a href="#" className="preview">
          <h3 className={styles.title}>
            gfdgdfgdfgd lorem 100gfdgdfgdfgd lorem 100gfdgdfgdfgd lorem 100gfdgdfgdfgd lorem 100gfdgdfgdfgd lorem
            100gfdgdfgdfgd lorem 100gfdgdfgdfgd lorem 100gfdgdfgdfgd lorem 100gfdgdfgdfgd lorem 100gfdgdfgdfgd lorem 100
          </h3>
          <p className={styles.text}>gkfdlgkfk;lgk kgldfl;gl;d k lgl;dfkgl dkgl;d l;kg dfgl; dkg;dkfg;ldk ;lkg df;kg</p>
          <div className={styles.post_footer}>
            <span className={styles.more}>Read more...</span>
            <ul className={styles.tags_list}>
              <li className="tag_item">gfdg</li>
              <li className="tag_item">gfdg</li>
              <li className="tag_item">gfdg</li>
              <li className="tag_item">gfdg</li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Post;
