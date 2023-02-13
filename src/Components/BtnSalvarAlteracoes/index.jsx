import "./btnSalvarAlteracoes.css";
import { Link } from "react-router-dom";

export default function BtnSalvarAlteracoes({id, url, nomeTutor, cpf, telefone, endereco, indicacao, nomePaciente, especie
  , raca, nascimento, castrado, clinicoResponsavel, telefoneClinico}) {

  async function edit(e) {
    e.preventDefault();

      alert("Dados atualizados!")

      await fetch(url + `/cliente`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        nomeTutor: nomeTutor,
        cpf: cpf,
        telefone: telefone,
        endereco: endereco,
        indicacao: indicacao,
        nomePaciente: nomePaciente,
        raca: raca,
        especie: especie,
        castrado: castrado,
        dataNascimento: nascimento,
        clinicoResponsavel: clinicoResponsavel,
        telefoneClinico: telefoneClinico,
      }),
    });
  }
  return (
    <div className="btnSalvarAlteracoes-container">
      <Link className="btnSalvarAlteracoes" onClick={edit} to="/">
      Salvar alterações
      </Link>
    </div>
  );
}
