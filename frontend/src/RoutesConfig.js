import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cliente from "./pages/Cliente";
import Pedido from "./pages/Pedido";
import Home from "./pages/home";
import Planos from "./pages/planos";
import Sobre from "./pages/sobre";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cliente" element={<Cliente />} />
      <Route path="login" element={<Login />} />
      <Route path="pedido" element={<Pedido />} />
      <Route path="*" element={<h1> 404 - Página Não Encontrada!</h1>} />
      <Route path="planos" element={<Planos />} />
      <Route path="sobre" element={<Sobre />} />
    </Routes>
  );
}
