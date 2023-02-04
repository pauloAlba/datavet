import { useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/routes"

function App() {
  return (
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
  );
}

export default App;
