import styles from "./fullPost.module.scss";
import heart from "./../../assets/heart.png";
import plus from "./../../assets/plus.svg";
import { Link } from "react-router-dom";

const FullPost = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className="container">
          <h1 className={styles.title}>
            Repellat nihil in magnam quasi. Et dicta at est laborum doloribus sit. Quia possimus necessitatibus magnam,
            est, nulla, reiciendis exercitationem neque et tenetur quia deserunt asperiores blanditiis doloribus ipsum
            beatae numquam. Ullam rerum consequuntur occaecati error. Possimus consequatur consectetur doloribus
            voluptate nihil, tenetur sunt fugiat quae id, ducimus non.
          </h1>
          <div className={styles.info}>
            <div className={styles.info_author}>
              <a href="#">
                <img className={styles.avatar} src="https://api.realworld.io/images/demo-avatar.png" alt="avatar" />
              </a>
              <div className={styles.author}>
                <a href="#" className={styles.name}>
                  gdf gdfgd
                </a>
                <span className={styles.date}>fds fdsfs fds</span>
              </div>
            </div>
            <div className={styles.social}>
              <button className={styles.follow}>
                <img className={styles.plus} src={plus} alt="plus" />
                Follow Magda Parry
              </button>
              <button className={styles.favorite}>
                <img className={styles.heart} src={heart} alt="heart" />
                Favorite Article (34)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className={styles.text}>
          Iusto laborum aperiam neque delectus consequuntur provident est maiores explicabo. Laborum est maxime enim
          accusantium magnam.\nRerum dolorum minus laudantium delectus eligendi necessitatibus quia.\nDeleniti
          consequatur explicabo aut nobis est vero tempore.\nExcepturi earum quo quod voluptatem quo iure vel sapiente
          occaecati.\nConsectetur consequatur corporis doloribus omnis harum voluptas esse amet. Eveniet sit ipsa
          officiis laborum.\nIn vel est omnis sed impedit quod magni.\nDignissimos quis illum qui atque aut ut quasi
          sequi. Laborum itaque quos provident.\nRerum cupiditate praesentium amet voluptatem dolor impedit modi
          dicta.\nVoluptates assumenda optio est.\nNon aperiam nam consequuntur vel a commodi dicta incidunt. Blanditiis
          non quos aut dolore nulla unde.\nIncidunt repudiandae amet eius porro.\nTempora unde sapiente repellat
          voluptatem omnis et ut omnis in.\nEt pariatur odit qui minima perspiciatis non dolores. Maiores assumenda
          porro est ea necessitatibus qui qui dolorum.\nVelit suscipit ut ipsam odit aut earum. Non natus nihil.
          Doloribus temporibus dolorum placeat.\nFugit nulla quaerat.\nEveniet ratione odit sed non rerum.\nNemo tempore
          eveniet veritatis alias repellat et.\nVoluptas nisi quis commodi id. Animi enim quo deserunt.\nAmet facilis at
          laboriosam.\nRerum assumenda harum et sapiente suscipit ipsa fugiat.\nSunt ut aut rem expedita consequatur
          optio.\nRecusandae tenetur rerum quos culpa. Et fuga repellendus magnam dignissimos eius aspernatur rerum.
        </p>
        <ul className={styles.tags_list}>
          <li>
            <a className={styles.tag_item} href="#">
              dgfdgfd
            </a>
          </li>
          <li>
            <a className={styles.tag_item} href="#">
              gfdgfd
            </a>
          </li>
          <li>
            <a className={styles.tag_item} href="#">
              gfdgfdgfdgfdjghj
            </a>
          </li>
          <li>
            <a className={styles.tag_item} href="#">
              gfdgfgfdgfd
            </a>
          </li>
        </ul>
        <div className={styles.info_second}>
          <div className={styles.info_author}>
            <a href="#">
              <img className={styles.avatar} src="https://api.realworld.io/images/demo-avatar.png" alt="avatar" />
            </a>
            <div className={styles.author}>
              <a href="#" className={styles.second_name}>
                gdf gdfgd
              </a>
              <span className={styles.date}>fds fdsfs fds</span>
            </div>
          </div>
          <div className={styles.social}>
            <button className={styles.follow}>
              <img className={styles.plus} src={plus} alt="plus" />
              Follow Magda Parry
            </button>
            <button className={styles.favorite}>
              <img className={styles.heart} src={heart} alt="heart" />
              Favorite Article (34)
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
            <div className={styles.comments}>
              <div className={styles.comments_content}>
                <p className={styles.comments_text}>
                  Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam
                  atque cumque. Sint dolorem facere non.
                </p>
              </div>
              <div className={styles.comments_footer}>
                <div className={styles.info_third}>
                  <a href="#">
                    <img
                      className={styles.third_avatar}
                      src="https://api.realworld.io/images/demo-avatar.png"
                      alt="avatar"
                    />
                  </a>

                  <a href="#" className={styles.third_name}>
                    gdf gdfgd
                  </a>
                  <span className={styles.third_date}>fds fdsfs fds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPost;
