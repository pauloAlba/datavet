import "./lista.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Lista() {
  const [nome, setNome] = useState([]);  

  useEffect(() => {
    async function getUsers() {
      await axios.get("http://datavetbackend.onrender.com/clientes") //https://fdffffffff.onrender.com/Produtos
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
