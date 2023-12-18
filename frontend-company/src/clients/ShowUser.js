import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ShowUser() {
  const [client, setClient] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadClient();
  }, []);
  const loadClient = async () => {
    const result = await axios.get(`http://localhost:8080/api/client/${id}`);
    setClient(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2>Les détailes du client</h2>
          <div className="card">
            Détailes d'utilisateur:
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Nom: </b>
                {client.lastname}
              </li>
              <li className="list-group-item">
                <b>Prénom:</b>
                {client.lastname}
              </li>
              <li className="list-group-item">
                <b>Email:</b>
                {client.email}
              </li>
              <li className="list-group-item">
                <b>Email:</b>
                {client.ville}
              </li>
            </ul>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
