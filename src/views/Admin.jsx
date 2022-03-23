import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
    return (
        <>
        <div className="container">
            <h1>Àrea de admin</h1>
            <ul>
                <li><Link to="/Afiliacao" id="linkNav" className="nav-link text-dark">Afiliacao</Link></li>
                <li><Link to="/Afiliada" id="linkNav" className="nav-link text-dark">Afiliada</Link></li>
                <li><Link to="/Autonoma" id="linkNav" className="nav-link text-dark">Autonoma</Link></li>
                <li><Link to="/ProdutoServico" id="linkNav" className="nav-link text-dark">Produtos e serviços</Link></li>
                <li><Link to="/Login/new_user" id="linkNav" className="nav-link text-dark">Link de cadastro para usuárias aprovadas</Link></li>
            </ul>
        </div>
        </>
    );
}