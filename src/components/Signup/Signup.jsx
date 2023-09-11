import styles from "./Signup.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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
        navigate("/");
      })
      .cat((err) => {
        setSubmitBottonDisable(false);
        setErrorMsg(err.message);
      });
  };

  return <h1>Hi Signup</h1>;
}
