import styles from "../Login/Login.module.css";
import { Link} from "react-router-dom";
import { auth } from "../../firebase";

function salir() {
  return auth.signOut()
  // .then(() => navigate("/login"));
}

export function Home(props) {
  return (
    <div className={styles.container}>
    <div className={styles.innerBoxHome}>
      <div>
        <h1 >
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>
      <h2>{props.name ? `Welcome  ${props.name}` : "Start Session"}</h2>
      <button onClick={salir}>Exit</button>
    </div>

    </div>
  );
}
