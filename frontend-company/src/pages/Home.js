import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function Home() {
  const [clients, setClients] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    loadClients();
  }, []);
  const loadClients = async () => {
    const result = await axios.get("http://localhost:8080/api/clients");
    setClients(result.data);
    console.log(result.data);
  };
  const deletClient = async (id) => {
    await axios.delete(`http://localhost:8080/api/client/${id}`);
    loadClients();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">Email</th>
              <th scope="col">Ville</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr>
                <td>{client.firstname}</td>
                <td>{client.lastname}</td>
                <td>{client.email}</td>
                <td>{client.ville}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/showclient/${client.id}`}
                  >
                    Consulter
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editeclient/${client.id}`}
                  >
                    Modifier
                  </Link>
                  <Link
                    className="btn btn-danger mx-2"
                    onClick={() => deletClient(client.id)}
                  >
                    Supprimer
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
