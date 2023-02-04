import "./home.css";
import Header from "../../Components/Header";
import Pesquisar from "../../Components/Pesquisar";
import Lista from "../../Components/Lista";
import BtnCadastrar from "../../Components/BtnCadastrar";


export default function Home() {
  return (
    <div className="home-container">
        <Header titulo="PACIENTES CADASTRADOS"/>
        <Lista />
        <Pesquisar />
        <BtnCadastrar />
    </div>
  );
}
