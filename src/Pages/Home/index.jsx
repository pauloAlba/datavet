import "./home.css";
import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Pesquisar from "../../Components/Pesquisar";
import Lista from "../../Components/Lista";
import BtnCadastrar from "../../Components/BtnCadastrar";
import axios from "axios";

export default function Home() {

  return (
    <div className="home-container">
      <Header titulo="PACIENTES CADASTRADOS" />
      <Lista />
      <Pesquisar />
      <BtnCadastrar />
    </div>
  );
}
