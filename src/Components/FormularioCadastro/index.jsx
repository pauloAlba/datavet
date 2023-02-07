import "./formularioCadastro.css";

export default function FormularioCadastro({status}) {
  return (
    <div className="formularioCadastro-container">
      <form>
        <div className="flex-wrapper">
        <h2>Dados do tutor</h2>
        <br />
          <label htmlFor="">Nome do tutor:</label>
          <input disabled={status} type="text" />
   
          <label htmlFor="">CPF:</label>
          <input disabled={status} type="text" />

          <label htmlFor="">Telefone:</label>
          <input disabled={status} type="text" />

          <label htmlFor="">Endereço:</label>
          <input disabled={status} type="text" />

          <label htmlFor="">Indicação:</label>
          <input disabled={status} type="text" />
        </div>
        <div className="flex-wrapper">
        <h2>Dados do paciente</h2>
        <br />
          <label htmlFor="">Nome do paciente:</label>
          <input disabled={status} type="text" />
   
          <label htmlFor="">Espécie:</label>
          <input disabled={status} type="text" />

          <label htmlFor="">Nascimento:</label>
          <input disabled={status} type="text" />

          <label htmlFor="">Castrado:</label>
          <input disabled={status} type="text" />

          <label htmlFor="">Clinico geral responsável:</label>
          <input disabled={status} type="text" />

          <label htmlFor="">Telefone:</label>
          <input disabled={status} type="text" />
        </div>
      </form>
    </div>
  );
}
