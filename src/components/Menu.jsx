import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <Link to="/" className="navbar-brand" id="texto-logo">EmpoDelas</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Somos" className="nav-link text-dark">Quem Somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contato" id="linkNav" className="nav-link text-dark">Contato</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ProdutoServico" id="linkNav" className="nav-link text-dark">Produtos e serviços</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Autonoma" id="linkNav" className="nav-link text-dark">Autonoma</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}