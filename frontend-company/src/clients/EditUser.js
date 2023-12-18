import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [client, setClient] = useState({
    lastname: "",
    firstname: "",
    email: "",
    ville: "",
  });
  const { lastname, firstname, email, ville } = client;

  const onInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadClient();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/client/${id}`, client);
    navigate("/");
  };
  const loadClient = async () => {
    const result = await axios.get(`http://localhost:8080/api/client/${id}`);
    setClient(result.data);
  };

  return (
    <div className="container ">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
        <h2 className="text-center md-4">Modifier de votre client</h2>
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
          <div className="mb-3">
            <label htmlFor="Ville" className="form-label">
              {" "}
              Votre ville :
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Entrer votre Ville"
              name="ville"
              value={ville}
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
  );
}
