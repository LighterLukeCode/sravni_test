import { Link } from "react-router-dom";
import styles from "./signUp.module.scss";

const SingUp = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <h1 className={styles.title}>Sign up</h1>
        <Link to="/login" className={styles.link}>
          Have an account?
        </Link>
      </div>
      <form>
        <fieldset>
          <fieldset>
            <input type="text" placeholder="Username" className={styles.input} />
          </fieldset>
          <fieldset>
            <input type="email" placeholder="Email" className={styles.input} />
          </fieldset>
          <fieldset>
            <input type="password" placeholder="Password" className={styles.input} />
          </fieldset>
          <button type="submit" className={styles.btn}>
            Sign up
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SingUp;
