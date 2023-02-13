import "./btnSalvar.css";
import { Link } from "react-router-dom";

export default function BtnSalvar({id, url, nomeTutor, cpf, telefone, endereco, indicacao, nomePaciente, especie
, raca, nascimento, castrado, clinicoResponsavel, telefoneClinico}) {

  function handleSalvar(e){
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
          clinicoResponsavel: clinicoResponsavel,
          telefoneClinico: telefoneClinico,
        }),
      });
  }
  return (
    
    <div className="btnSalvar-container">
        <Link className="btnSalvar" onClick={handleSalvar} to="/">
        Salvar
        </Link>
    </div>
  );
}
