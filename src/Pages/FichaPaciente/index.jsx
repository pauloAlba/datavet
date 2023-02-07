import "./fichaPaciente.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../Components/Header";
import BtnFechar from "../../Components/BtnFechar";
import BtnEditar from "../../Components/BtnEditar";

export default function FichaPaciente() {
  const { id } = useParams();
  const url = "https://fdffffffff.onrender.com";

  const [user, setUser] = useState([]);

  useEffect(() => {
    async function teste() {
      await fetch(url + `/Produto?id=${id}`)
        .then((res) => res.json())
        .then((res) => {
          setUser(res);
        });
    }
    teste();
  }, []);

  return (
    <div className="formularioCadastro-container">
      <Header />
      <BtnFechar />
      <form>
        <div className="flex-wrapper">
          <h2>Dados do tutor</h2>
          <br />
          <label htmlFor="">Nome do tutor:</label>
          <input disabled="false" type="text" value={user.nomeProduto} />

          <label htmlFor="">CPF:</label>
          <input disabled="false" type="text" value={user.quantidade} />

          <label htmlFor="">Telefone:</label>
          <input disabled="false" type="text" value={user.quantidade} />

          <label htmlFor="">Endereço:</label>
          <input disabled="false" type="text" value={user.quantidade} />

          <label htmlFor="">Indicação:</label>
          <input disabled="false" type="text" value={user.quantidade} />
        </div>
        <div className="flex-wrapper">
          <h2>Dados do paciente</h2>
          <br />
          <label htmlFor="">Nome do paciente:</label>
          <input disabled="false" type="text" value={user.nomeProduto} />
          <div className="box">
            <label htmlFor="">Raça:</label>
            <input disabled="false" type="text" value={user.nomeProduto} />

            <label htmlFor="">Espécie:</label>
            <select>
              <option value="">Cachorro</option>
              <option value="">Gato</option>
              <option value="">Coelho</option>
              <option value="">Cacatua</option>
              <option value="">Caturrita</option>
              <option value="">Hamster</option>
              <option value="">Cobra</option>
            </select>
          </div>
          <div className="box">
            <label htmlFor="">Castrado:</label>
            <select name="" id="">
              <option value="">Não</option>
              <option value="">Sim</option>
            </select>

            <label htmlFor="">Nascimento:</label>
            <input type="date" />
          </div>

          <label htmlFor="">Clínico responsável:</label>
          <input disabled="false" type="text" value={user.quantidade} />

          <label htmlFor="">Telefone:</label>
          <input disabled="false" type="text" value={user.quantidade} />
        </div>
      </form>

      <BtnEditar />
    </div>
  );
}
