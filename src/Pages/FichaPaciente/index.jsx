import "./fichaPaciente.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IMaskInput } from "react-imask";


import Header from "../../Components/Header";
import BtnFechar from "../../Components/BtnFechar";
import BtnEditar from "../../Components/BtnEditar";
import BtnDeletar from "../../Components/BtnDeletar";


export default function FichaPaciente() {
  const { id } = useParams();
  const url = "https://datavetbackend.onrender.com";
  

  const [user, setUser] = useState([]);

  useEffect(() => {
    async function teste() {
      await fetch(url + `/cliente?id=${id}`) ///Produto?id=${id}
        .then((res) => res.json())
        .then((res) => {
          setUser(res);
        });
    }
    teste();
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
          <input disabled="false" type="text" value={user.nomeTutor} />

          <label htmlFor="">CPF:</label>
          <IMaskInput 
          disabled="false"
          mask="000.000.000-00"
          value={user.cpf}
          />

          <label htmlFor="">Telefone:</label>
          <IMaskInput 
          disabled="false"
          mask="(00) 90000-0000"
          value={user.telefone}
          placeholder="(00) 00000-0000"
          />
          

          <label htmlFor="">Endereço:</label>
          <input disabled="false" type="text" value={user.endereco} />

          <label htmlFor="">Indicação:</label>
          <input disabled="false" type="text" value={user.indicacao} />
        </div>
        <div className="flex-wrapper">
          <h2>Dados do paciente</h2>
          <br />

          <label htmlFor="">Nome do paciente:</label>
          <input disabled="false" type="text" value={user.nomePaciente} />

          <div className="box1">
            <div className="box2">
              <label htmlFor="">Raça:</label>
              <input disabled="false" type="text" value={user.raca} />
            </div>

            <div className="box2">
              <label htmlFor="">Espécie:</label>
              <input disabled="false" type="text" value={user.expecie} />
            </div>
          </div>

          <div className="box1">
            <div className="box2">
              <label htmlFor="">Nascimento:</label>
              <IMaskInput
                disabled="false"
                mask="00/00/0000"
                value={user.dataNascimento}
                onChange={(e) => setNascimento(e.target.value)}
              />
            </div>
            <div className="box2">
              <label htmlFor="">Castrado:</label>
              <input disabled="false" type="text" value={user.castrado} />
            </div>
          </div>

          <div className="box2"></div>

          <label htmlFor="">Clínico responsável:</label>
          <input disabled="false" type="text" value={user.clinicoResponsavel} />

          <label htmlFor="">Telefone:</label>
          <input disabled="false" type="text" value={user.telefoneClinco} />
        </div>
      </form>

      <div className="buttons">
        <BtnDeletar id={id} url={url} />
        <Link className="btnEditar" to={`/editar/${id}`}>
          Editar
        </Link>
      </div>
    </div>
  );
}
