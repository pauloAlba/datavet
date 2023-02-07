import { Routes, Route } from "react-router-dom";


import Home from "../Pages/Home";
import CadastrarPaciente from "../Pages/CadastrarPaciente";
import EditarPaciente from "../Pages/EditarPaciente";
import FichaPaciente from "../Pages/FichaPaciente";

export default function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/cadastrar" element={ <CadastrarPaciente/> } />
      <Route path="/editar" element={ <EditarPaciente/> } />
      <Route path="/ficha/:id" element={ <FichaPaciente/> }/>
    </Routes>
  )
}
