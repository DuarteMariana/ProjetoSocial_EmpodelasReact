import React, { useState, useEffect } from "react";
import ProdutoServicoService from "../../services/ProdutoServicoService";
import { useNavigate } from "react-router-dom";
export default function IndexUsers() {
    const [produtoServico, setProdutoServico] = useState([]);
    const navigate = useNavigate();

    const getAllProdutoServico = () => {
        ProdutoServicoService.getAllProdutoServico().then((response)=> {
            setProdutoServico(response.data);
            console.log(response.data)
        }).catch((error)=> {
            console.log(error);
        });
    }
    useEffect(() => {
        getAllProdutoServico();
    }, [])

    function detailsProdutoServico(id){
        navigate(`/ProdutoServico_view/${id}`);
        console.log(id);
    }
    
    

    return (
        <div className="container">
            {
                produtoServico.map((produtoServico)=> (
            <div class="card" key= {produtoServico.id_produtoServico}>
                <img class="card-img-top" src={produtoServico.imagemURL_produtoServico} alt="Imagem de capa do card"/>
                <div class="card-body">
                <p>{produtoServico.tipo_produtoServico}</p>
                <h5 class="card-title">{produtoServico.nome_produtoServico}</h5>
                <p class="card-text">{produtoServico.preco_produtoServico}</p>
                <a class="btn btn-primary" onClick={ () => detailsProdutoServico(produtoServico.id_produtoServico)}>Visitar</a>
                </div>
            </div>
    
                ))
            }
     </div> 
    );
}

