import "./btnEditar.css";
import { Link } from "react-router-dom";


export default function BtnEditar() {
  return (
    
    <div className="btnEditar-container">

      <img className="btnImprimir" width={70} src="/public/printer.png" alt="" />
         
      <div>
        <Link to="/editar">
        <button className="btnEditar">Editar</button>
        </Link>

        <Link to="/">
        <button className="btnDeletar">Deletar</button>
        </Link>
      </div>
    </div>
  );
}
