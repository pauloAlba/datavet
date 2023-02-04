import "./editarPaciente.css";

import Header from "../../Components/Header";
import FormularioCadastro from "../../Components/FormularioCadastro";
import BtnSalvar from "../../Components/BtnSalvar";
import BtnFechar from "../../Components/BtnFechar";
import BtnSalvarAlteracoes from "../../Components/BtnSalvarAlteracoes";

export default function EditarPaciente() {
  return (
    <div className="editar-container">
      <BtnFechar/>
      <Header titulo="ALTERAR DADOS" />
      <FormularioCadastro/>
      <BtnSalvarAlteracoes/>
    </div>
  );
}
