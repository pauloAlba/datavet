import "./lista.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Lista() {
  const [nome, setNome] = useState([]);

  useEffect(() => {
    async function getUsers() {
      await axios.get("http://localhost:3000/clientes") //https://fdffffffff.onrender.com/Produtos
        .then(response => {
          setNome(response.data);
        })
        .catch((error) => console.log(error));
    }
    getUsers();
  }, []);

  return (
    <div className="lista-container">
      <br /><br />
      {nome.map((user) => {
        return (
          <ul>
            <Link className="btnAbrir" to={`/ficha/${user.id}`}>Abrir</Link>
            <li key={user.id}>
              <strong>{user.id}</strong>
              <strong>{user.nomePaciente}</strong>
              <strong className="visible">{user.raca}</strong>
              <strong className="visible">{user.especie}</strong>
              <strong className="visible">{user.castrado}</strong>
              <strong className="visible">{user.clinicoResponsavel}</strong>
              <strong className="visible">{user.nascimento}</strong>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
