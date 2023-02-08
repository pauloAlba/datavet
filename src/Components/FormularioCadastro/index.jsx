import "./formularioCadastro.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BtnSalvar from "../../Components/BtnSalvar"

export default function FormularioCadastro({ status }) {
  const url = "https://datavetbackend.onrender.com";

  const [nomeTutor, setNomeTutor] = useState("");
  const [cpf, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [indicacao, setIndicacao] = useState("");
  const [nomePaciente, setNomePaciente] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [castrado, setCastrado] = useState("");
  const [clinico, setClinico] = useState("");
  const [telefoneClinico, setTelefoneClinico] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert("Cliente cadastrado!")

    fetch(url + `/cliente`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nomeTutor: nomeTutor,
        cpf: cpf,
        telefone: telefone,
        endereco: endereco,
        indicacao: indicacao,
        nomePaciente: nomePaciente,
        especie: especie,
        raca: raca,
        dataNascimento: nascimento,
        castrado: castrado,
        clinicoResponsavel: indicacao,
        telefoneClinico: telefoneClinico,
      }),
    });


    setNomeTutor("");
    setCPF("");
    setCastrado("");
    setClinico("");
    setEndereco("");
    setEspecie("");
    setIndicacao("");
    setNascimento("");
    setNomePaciente("");
    setRaca("");
    setTelefone("");
    setTelefoneClinico("");
  }



  return (
    <div className="formularioCadastro-container">
      <form>
        <div className="flex-wrapper">
          <h2>Dados do tutor</h2>
          <br />
          <label htmlFor="">Nome do tutor:</label>
          <input
            type="text"
            value={nomeTutor}
            onChange={(e) => setNomeTutor(e.target.value)}
          />

          <label htmlFor="">CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => {
              setCPF(e.target.value);
            }}
          />

          <label htmlFor="">Telefone:</label>
          <input
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            type="text"
          />

          <label htmlFor="">Endereço:</label>
          <input
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            type="text"
          />

          <label htmlFor="">Indicação:</label>
          <input
            value={indicacao}
            onChange={(e) => setIndicacao(e.target.value)}
            type="text"
          />
        </div>
        <div className="flex-wrapper">
          <h2>Dados do paciente</h2>
          <br />
          <label htmlFor="">Nome do paciente:</label>
          <input
            value={nomePaciente}
            onChange={(e) => setNomePaciente(e.target.value)}
            type="text"
          />

          <label htmlFor="">Espécie:</label>
          <input
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            type="text"
          />

          <label htmlFor="">Raça:</label>
          <input
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
            type="text"
          />

          <label htmlFor="">Nascimento:</label>
          <input
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            type="text"
          />

          <label htmlFor="">Castrado:</label>
          <input
            value={castrado}
            onChange={(e) => setCastrado(e.target.value)}
            type="text"
          />

          <label htmlFor="">Clinico geral responsável:</label>
          <input
            value={clinico}
            onChange={(e) => setClinico(e.target.value)}
            type="text"
          />

          <label htmlFor="">Telefone:</label>
          <input
            value={telefoneClinico}
            onChange={(e) => setTelefoneClinico(e.target.value)}
            type="text"
          />
        </div>
      </form>

      <BtnSalvar  onClick={handleSubmit}
       url={url}
       nomeTutor={nomeTutor}
       cpf={cpf}
       telefone={telefone}
       endereco={endereco}
       indicacao={indicacao}
       nomePaciente={nomePaciente}
       especie={especie}
       raca={raca}
       dataNascimento={nascimento}
       castrado={castrado} 
       clinicoResponsavel={indicacao}
      telefoneClinico={telefoneClinico}/>
      <div className="btnSalvar-container">
        <button onClick={handleSubmit}>Salvar</button>
      </div>
    </div>
  );
}
