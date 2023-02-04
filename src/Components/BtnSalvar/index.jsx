import "./btnSalvar.css";
import { Link } from "react-router-dom";

export default function BtnSalvar() {
  return (
    <div className="btnSalvar-container">
      <Link to="/">
      <button>Salvar</button>
      </Link>
    </div>
  );
}
