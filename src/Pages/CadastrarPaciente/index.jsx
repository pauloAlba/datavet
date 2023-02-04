import "./cadastrarPaciente.css";

import Header from "../../Components/Header";
import FormularioCadastro from "../../Components/FormularioCadastro";
import BtnSalvar from "../../Components/BtnSalvar";
import BtnFechar from "../../Components/BtnFechar";

export default function CadastrarPaciente() {
  return (
    <div className="cadastar-container">
      <BtnFechar/>
      <Header titulo="CADASTRAR NOVO PACIENTE" />
      <FormularioCadastro/>
      <BtnSalvar/>
    </div>
  );
}
