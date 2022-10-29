import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <h1 className={styles.title}>conduit</h1>
        <p className={styles.text}>A place to share your knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;
