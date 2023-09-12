import styles from "../Login/Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { async } from "@firebase/util"; // CHECK THIS LINE
import { InputControl } from "../InputControl/InputControl";

export function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitBottonDisable, setSubmitBottonDisable] = useState(false);

  const register = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill out all fields");
      return;
    }
    setErrorMsg("");
    setSubmitBottonDisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBottonDisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/login");
      })
      .cat((err) => {
        setSubmitBottonDisable(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Register</h1>
        <InputControl
          label="Name"
          placeholder="Enter Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={register} disabled={submitBottonDisable}>
            Save
          </button>
        </div>
        <p>
          Already have an account{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
        {console.log(values)}
      </div>
    </div>
  );
}
