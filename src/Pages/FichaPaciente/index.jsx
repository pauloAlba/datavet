import "./fichaPaciente.css";

import Header from "../../Components/Header";
import FormularioCadastro from "../../Components/FormularioCadastro";
import BtnFechar from "../../Components/BtnFechar";
import BtnEditar from "../../Components/BtnEditar";

export default function FichaPaciente() {
  return (
    <div className="ficha-container">
      <BtnFechar/>
      <Header titulo="FICHA DO PACIENTE" />
      <FormularioCadastro status="true"/>
      <BtnEditar/>
    </div>
  );
}
