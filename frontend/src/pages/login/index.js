import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as firebase from "firebase/app";

import "./styles.css";
import Header from "../../components/header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(history.push("/"))
      .catch();
  }

  return (
    <div className="container">
      <Header />
      <div className="card login">
        <form onSubmit={handleLogin}>
          <input
            type="Email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="main" type="submit" value="Login">
            Login
          </button>
        </form>
        <Link to="/register-by/register" className="link">
          Me cadastrar
        </Link>
      </div>
    </div>
  );
}
