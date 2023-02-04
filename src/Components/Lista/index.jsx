import "./lista.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Lista() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    function addNome() {
      setNome("olá");
    }
    addNome();
  }, []);

  return (
    <div className="lista-container">
      <ul>
        <Link to="/ficha"><button>Abrir</button></Link>
        <li>{nome}</li>
        <li className="visible">{nome}</li>
        <li className="visible">{nome}</li>
        <li className="visible">{nome}</li>
        <li className="visible">{nome}</li>
      </ul>
    </div>
  );
}
