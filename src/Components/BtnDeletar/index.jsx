import "./btnDeletar.css";
import { Link } from "react-router-dom";

export default function BtnDeletar({ id, url }) {
  function handleDelete() {
    fetch(url + `/cliente`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
  }
  return (
    <div className="btnDeletar-container">
      <Link to="/">
        <button onClick={handleDelete} className="btnDeletar">
          Deletar
        </button>
      </Link>
    </div>
  );
}
