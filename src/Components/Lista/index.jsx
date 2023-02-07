import "./lista.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Lista() {
  const [nome, setNome] = useState([]);  

  const url = "http://datavetbackend.onrender.com"

  useEffect(() => {
    async function getUsers() {
        await fetch(url + `/clientes`) ///Produto?id=${id}
        .then((res) => res.json())
        .then((res) => {
          setNome(res);
        });
    }
    getUsers();
  }, []);

  return (
    <div className="lista-container">
      <br /><br />
      {nome.map((user) => {
        return (
          <ul>
            <li key={user.id}>
              <input type="text" width={"10px"} value={user.id} />
              <input type="text" width={"10px"} value={user.nomePaciente} />
              <input className="visible" type="text" width={"40px"} value={user.raca}/>
              <input className="visible" type="text" width={"40px"} value={user.especie}/>
              <input className="visible" type="text" width={"10px"} value={user.castrado}/>
              <input className="visible" type="text" width={"10px"} value={user.clinicoResponsavel}/>
              <input className="visible" type="text" width={"40px"} value={user.nascimento}/>
            <Link className="btnAbrir" to={`/ficha/${user.id}`}>Abrir</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
