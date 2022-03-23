import React from "react";
import { Link } from "react-router-dom";
import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);


export default function Menu({ user }) {
    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
        <link href="//db.onlinewebfonts.com/c/1fed4454352f201d52b65ca5480afb2d?family=Playlist" rel="stylesheet" type="text/css"/>
                <nav id="menu" className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3">
                    <div className="container">
                        <Link to="/" className="navbar-brand nav" style={{fontFamily: 'Playlist', color:"red", fontSize: "35px"}}>EmpoDelas</Link>
                        <small>{user == null? <></> : user.rol }</small>
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
                        <Link to="/ProdutoServico-users" className="nav-link text-dark">Produtos e Serviços</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Somos" className="nav-link text-dark">Quem Somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contato" id="linkNav" className="nav-link text-dark">Contato</Link>
                        </li>
                        <li className="nav-item">
                        
                            <Link to="/Login" id="linkNav" className="nav-link text-dark">Login</Link>
                        </li>
                        {user == null? <></> :
                    
                        user == null? <></> : user.rol == "admin"? 
                        <>
                        <div class="dropdown">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Admin
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#"><Link to="/Admin" className="text-dark">Administrar</Link></a>
                            <a class="dropdown-item" href="#"><button onClick={() => signOut(auth)}>Encerrar sessão</button></a>
                            </div>
                        </div>
                         
                        </>
                        : <></>}
                        {user == null? <></> : user.rol == "autonoma"?
                        <>
                        <div class="dropdown">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Opções
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#"><Link to="/ProdutoServico-Create" className="text-dark">Criar produto ou serviço</Link></a>
                            <a class="dropdown-item" href="#"><button onClick={() => signOut(auth)}>Encerrar sessão</button></a>
                            </div>
                        </div>
                        </>
                        :
                        user.rol == "afiliada"?
                        <>
                        <div class="dropdown">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Opções
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#"><Link to="/Afiliacao/Create/User" className="text-dark">Afiliar-se a um produto ou serviço</Link></a>
                            <a class="dropdown-item" href="#"><button onClick={() => signOut(auth)}>Encerrar sessão</button></a>
                            </div>
                        </div>
                        
                        </>
                        :
                        <></>
                        }
                        
                        
                        
                        
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}