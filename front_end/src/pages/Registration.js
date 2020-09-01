import React, { useState, useEffect } from "react";

const Registration = () => {
  const [state, setState] = useState({
    username: "",
    mail: "",
    password: "",
  });

  const fetchData = async () => {
    await fetch(`http://localhost:4000/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => console.log("Error", error));
  };

  useEffect(() => {
    fetchData();
  }, [state]);

  const handleForm = (event) => {
    event.preventDefault();
 
    fetch(`http://localhost:4000/users/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => console.log("Error", error));
  };

  const changeHandler = (event) => {
    console.log(event.target.value);
    const varName = event.target.name;
    const varValue = event.target.value;
    setState(Object.assign({}, state, { [varName]: varValue }));
  };

  return (
    <div className="Registration">
      <form className="row justify-content-center">
        <div className="col-md-5">
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Identifiant</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Identifiant"
              onChange={(event) => changeHandler(event)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Adresse e-mail</label>
            <input
              type="email"
              name="mail"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Adresse e-mail"
              onChange={(event) => changeHandler(event)}
            />
            <small id="emailHelp" className="form-text text-muted">
              Nous ne partagerons jamais votre e-mail avec qui que ce soit.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Mot de Passe</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Mot de Passe"
              onChange={(event) => changeHandler(event)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              Confirmer Mot de Passe
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirmer Mot de Passe"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Je ne suis pas un robot.
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleForm}
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};
export default Registration;
