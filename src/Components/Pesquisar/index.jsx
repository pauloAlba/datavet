import "./pesquisar.css";

export default function Pesquisar() {

  function buscar(e){
    e.preventDefault()
  }
  return (
    <div className="pesquisar-container">
      <form onSubmit={(e) => buscar(e)}>
        <input type="text" />
      </form>
    </div>
  );
}
