import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Somos from "./views/Somos";
import Contato from "./views/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ProdutoServico from "./views/ProdutoServico";
import ProdutoServicoCreate from "./views/ProdutoServico/Create";
import Autonoma from "./views/Autonoma";
import AutonomaCreate from "./views/Autonoma/Create";

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
        <Route path="/ProdutoServico-Create" element={<ProdutoServicoCreate/>} />
        <Route path="/ProdutoServico-Update/:id" element={<ProdutoServicoCreate/>} />
        <Route path="/ProdutoServico" element={<ProdutoServico/>} />
        <Route path="/Autonoma" element={<Autonoma/>} />
        <Route path="/Autonoma-Create" element={<AutonomaCreate/>} />
        <Route path="/Autonoma-Update/:id" element={<AutonomaCreate/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
