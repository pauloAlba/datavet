import "./fichaPaciente.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../Components/Header";
import BtnFechar from "../../Components/BtnFechar";
import BtnSalvarAlteracoes from "../../Components/BtnSalvarAlteracoes";

export default function EditarPaciente() {
  const { id } = useParams();
  const url = "https://datavetbackend.onrender.com";

  const [user, setUser] = useState([]);

  const [disabled, setDisabled]= useState(false)

  useEffect(() => {
    async function teste2() {
      await fetch(url + `/cliente?id=${id}`) ///Produto?id=${id}
        .then((res) => res.json())
        .then((res) => {
          setUser(res);
          console.log("okay")
          console.log(user)
        })
        .catch((error) =>{
          console.log(error)
          console.log("falhou")
        });
    }
    teste2();
  }, []);

  return (
    <div className="formularioCadastro-container">
      <Header titulo="FICHA DO PACIENTE" />
      <BtnFechar />
      <form>
        <div className="flex-wrapper">
          <h2>Dados do tutor</h2>
          <br />
          <label htmlFor="">Nome do tutor:</label>
          <input disabled={disabled} type="text" value={user.nomeTutor} />

          <label htmlFor="">CPF:</label>
          <input disabled={disabled} type="text" value={user.cpf} />

          <label htmlFor="">Telefone:</label>
          <input disabled={disabled}type="text" value={user.telefone} />

          <label htmlFor="">Endereço:</label>
          <input disabled={disabled}type="text" value={user.endereco} />

          <label htmlFor="">Indicação:</label>
          <inpu disabled={disabled}type="text" value={user.indicacao} />
        </div>
        <div className="flex-wrapper">
          <h2>Dados do paciente</h2>
          <br />

          <label htmlFor="">Nome do paciente:</label>
          <input disabled={disabled}type="text" value={user.nomePaciente} />

          <div className="box1">
            <div className="box2">
              <label htmlFor="">Raça:</label>
              <input disabled={disabled}type="text" value={user.raca} />
            </div>

            <div className="box2">
              <label htmlFor="">Espécie:</label>
              <input disabled={disabled}type="text" value={user.especie} />
            </div>
          </div>

          <div className="box1">
            <div className="box2">
              <label htmlFor="">Nascimento:</label>
              <input disabled={disabled}type="text" value={user.nascimento} />
            </div>
            <div className="box2">
              <label htmlFor="">Castrado:</label>
              <input disabled={disabled}type="text" value={user.castrado} />
            </div>
          </div>

          <div className="box2"></div>

          <label htmlFor="">Clínico responsável:</label>
          <input disabled={disabled}type="text" value={user.clinicoResponsavel} />

          <label htmlFor="">Telefone:</label>
          <input disabled={disabled} type="text" value={user.telefoneClinco} />
        </div>
      </form>
      <BtnSalvarAlteracoes />
    </div>
  );
}
