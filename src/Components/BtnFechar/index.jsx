import "./btnFechar.css";

import { Link } from "react-router-dom";

export default function BtnFechar() {


  return (
    <div className="btnFechar-container">
      <ul>
        <Link to="/"><button>X</button></Link>
      </ul>
    </div>
  );
}
