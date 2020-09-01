import React, { useState } from "react";
import { Link } from "react-router-dom";

const Connection = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  
  return (
    <div className="Connection">
      <form className="row justify-content-center">
        <div className="col-md-5">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Identifiant ou Adresse e-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Identifiant ou Adresse e-mail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Mot de Passe</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Mot de Passe"
            />
          </div>
          <Link path="/workspace">
            {" "}
            <button type="submit" className="btn btn-primary">
              Valider
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Connection;
