import "./btnCadastrar.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function BtnCadastrar() {

  function abrirCadastro(){
    
  }

  return (
    <div className="btnCadastrar-container">
      <ul>
        <Link to="/cadastrar"><button onClick={abrirCadastro}>+</button></Link>
        <span>Cadastrar novo</span>
      </ul>
    </div>
  );
}
