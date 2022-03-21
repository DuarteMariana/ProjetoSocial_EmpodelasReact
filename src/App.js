import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Somos from "./views/Somos";
import Contato from "./views/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Admin from "./views/Admin";
import ProdutoServico from "./views/ProdutoServico";
import ProdutoServicoCreate from "./views/ProdutoServico/Create";
import Autonoma from "./views/Autonoma";
import AutonomaCreate from "./views/Autonoma/Create";
import Afiliada from "./views/Afiliada";
import AfiliadaCreate from "./views/Afiliada/Create";
import Afiliacao from "./views/Afiliacao/";
import AfiliacaoCreate from "./views/Afiliacao/Create";


import "./assets/css/contato.css";
import "./assets/css/global.css";

import "./assets/css/index.css";
import "./assets/css/login.css";
import "./assets/css/produto.css";
import "./assets/css/site.css";
import "./assets/css/somos.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Somos" element={<Somos/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/ProdutoServico-Create" element={<ProdutoServicoCreate/>} />
        <Route path="/ProdutoServico-Update/:id" element={<ProdutoServicoCreate/>} />
        <Route path="/ProdutoServico" element={<ProdutoServico/>} />
        <Route path="/Autonoma" element={<Autonoma/>} />
        <Route path="/Autonoma-Create" element={<AutonomaCreate/>} />
        <Route path="/Autonoma-Update/:id" element={<AutonomaCreate/>} />
        <Route path="/Afiliada" element={<Afiliada/>} />
        <Route path="/Afiliada-Create" element={<AfiliadaCreate/>} />
        <Route path="/Afiliada-Update/:id" element={<AfiliadaCreate/>} />
        <Route path="/Afiliacao" element={<Afiliacao/>} />
        <Route path="/Afiliacao-Create" element={<AfiliacaoCreate/>} />
        <Route path="/Afiliacao-Update/:id" element={<AfiliacaoCreate/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
