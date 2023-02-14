import "./fichaPaciente.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IMaskInput } from "react-imask";

import Header from "../../Components/Header";
import BtnFechar from "../../Components/BtnFechar";
import BtnSalvarAlteracoes from "../../Components/BtnSalvarAlteracoes";

export default function EditarPaciente() {
  const { id } = useParams();
  const url = "https://datavetbackend.onrender.com";

  const [user, setUser] = useState([]);

  const [disabled, setDisabled] = useState(false);

  const [nomeTutor, setNomeTutor] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [indicacao, setIndicacao] = useState("");
  const [nomePaciente, setNomePaciente] = useState("");
  const [raca, setRaca] = useState("");
  const [especie, setEspecie] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [castrado, setCastrado] = useState("");
  const [clinico, setClinico] = useState("");
  const [telefoneClinico, setTelefoneClinico] = useState("");

  useEffect(() => {
    async function teste2() {
      const page = true;
      await fetch(url + `/cliente?id=${id}`) ///Produto?id=${id}
        .then((res) => res.json())
        .then((res) => {
          setUser(res);
          setNomeTutor(res.nomeTutor);
          setCpf(res.cpf);
          setTelefone(res.telefone);
          setEndereco(res.endereco);
          setIndicacao(res.indicacao);
          setNomePaciente(res.nomePaciente);
          setRaca(res.raca);
          setEspecie(res.especie);
          setCastrado(res.castrado);
          setNascimento(res.dataNascimento);
          setClinico(res.clinicoResponsavel);
          telefoneClinico(res.telefoneClinico);
        })
        .catch((error) => {
          console.log(error);
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
          <input
            disabled={disabled}
            type="text"
            value={nomeTutor}
            onChange={(e) => setNomeTutor(e.target.value)}
          />

          <label htmlFor="">CPF:</label>
          <IMaskInput
            mask="000.000.000-00"
            placeholder="Digite o CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <label htmlFor="">Telefone:</label>
          <IMaskInput
            disabled={disabled}
            mask="(00) 90000-0000"
            placeholder="(00) 00000-0000"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <label htmlFor="">Endereço:</label>
          <input
            disabled={disabled}
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />

          <label htmlFor="">Indicação:</label>
          <input
            disabled={disabled}
            type="text"
            value={indicacao}
            onChange={(e) => setIndicacao(e.target.value)}
          />
        </div>
        <div className="flex-wrapper">
          <h2>Dados do paciente</h2>
          <br />

          <label htmlFor="">Nome do paciente:</label>
          <input
            disabled={disabled}
            type="text"
            value={nomePaciente}
            onChange={(e) => setNomePaciente(e.target.value)}
          />

          <div className="box1">
            <div className="box2">
              <label htmlFor="">Raça:</label>
              <input
                disabled={disabled}
                type="text"
                value={raca}
                onChange={(e) => setRaca(e.target.value)}
              />
            </div>

            <div className="box2">
              <label htmlFor="">Espécie:</label>
              <input
                disabled={disabled}
                type="text"
                value={especie}
                onChange={(e) => setEspecie(e.target.value)}
              />
            </div>
          </div>

          <div className="box1">
            <div className="box2">
              <label htmlFor="">Nascimento:</label>
              <IMaskInput
                disabled={disabled}
                mask="00/00/0000"
                placeholder="dd/mm/aaaa"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
              />
            </div>

            <div className="box2">
              <label htmlFor="">Castrado:</label>
              <input
                disabled={disabled}
                type="text"
                value={castrado}
                onChange={(e) => setCastrado(e.target.value)}
              />
            </div>
          </div>

          <label htmlFor="">Clínico responsável:</label>
          <input
            disabled={disabled}
            type="text"
            value={clinico}
            onChange={(e) => setClinico(e.target.value)}
          />

          <label htmlFor="">Telefone:</label>
          <IMaskInput
            disabled={disabled}
            mask="(00) 90000-0000"
            placeholder="(00) 00000-0000"
            value={telefoneClinico}
            onChange={(e) => setTelefoneClinico(e.target.value)}
          />
        </div>
      </form>

      <Link to="/">
        <BtnSalvarAlteracoes
          url={url}
          id={id}
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
          clinicoResponsavel={clinico}
          telefoneClinico={telefoneClinico}
        />
      </Link>
    </div>
  );
}
