import "./btnEditar.css";
import { Link } from "react-router-dom";


export default function BtnEdit({id, url}) {

  function handleDelete(){
    fetch(url+`/cliente`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ "id":id })
    })
  }
  return (
    
    <div className="btnEditar-container">

        <Link to={`/editar/${id}`}>
        <button className="btnEditar">Editar</button>
        </Link>
    </div>
  );
}
