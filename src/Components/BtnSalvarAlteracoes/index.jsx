import "./btnSalvarAlteracoes.css";
import { Link } from "react-router-dom";

export default function BtnSalvarAlteracoes() {
  return (
    <div className="btnSalvarAlteracoes-container">
      <Link to="/ficha">
      <button>Salvar alterações</button>
      </Link>
    </div>
  );
}
