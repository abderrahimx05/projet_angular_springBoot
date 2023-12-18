import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [client, setClient] = useState({
    lastname: "",
    firstname: "",
    email: "",
  });
  const { lastname, firstname, email } = client;

  const onInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/newclient", client);
    navigate("/");
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2 className="text-center md-4">Creation de votre client</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                {" "}
                Votre nom :
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrer votre nom"
                name="lastname"
                value={lastname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Prénom" className="form-label">
                {" "}
                Votre prénpm :
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrer votre prénom"
                name="firstname"
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                {" "}
                Votre email :
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrer votre email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Ajouter
            </button>
            <button type="submit" className="btn btn-outline-danger mx-2">
              Annuler
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
