import styles from "./singIn.module.scss";
import { Link } from "react-router-dom";

const SingIn = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <h1 className={styles.title}>Sign in</h1>
        <Link to="/register" className={styles.link}>
          Need an account?
        </Link>
      </div>
      <form>
        <fieldset>
          <fieldset className={styles.field}>
            <input type="email" placeholder="Email" className={styles.input} />
          </fieldset>
          <fieldset>
            <input type="password" placeholder="Password" className={styles.input} />
          </fieldset>
          <button type="submit" className={styles.btn}>
            Sign in
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SingIn;
