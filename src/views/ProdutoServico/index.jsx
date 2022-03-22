import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProdutoServicoService from "../../services/ProdutoServicoService";

export default function Index() {
    const [produtoServico, setProdutoServico] = useState([]);
    

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

    const deleteProdutoServico = (id_produtoServico) => {
        ProdutoServicoService.deleteProdutoServico(id_produtoServico).then((response)=>{
            getAllProdutoServico(id_produtoServico);
        })
    }
    
    

    return (
        <div className="table-responsive">
            <br/>
            <Link to="/ProdutoServico-Create" className="btn btn-warning">Cadastrar Produto/Serviço</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Código</th>
                        <th>Tipo</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>URL imagem</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody >
                {
                    produtoServico.map((produtoServico)=> (
                        <tr key= {produtoServico.id_produtoServico} >
                        <td >{produtoServico.id_produtoServico}</td>
                        <td >{produtoServico.codigo_produtoServico}</td>
                        <td >{produtoServico.tipo_produtoServico}</td>
                        <td >{produtoServico.nome_produtoServico}</td>
                        <td >{produtoServico.descricao_produtoServico}</td>
                        <td >{produtoServico.imagemURL_produtoServico}</td>
                        <td >{produtoServico.preco_produtoServico}</td>
                        <td>
                            <Link to={`/ProdutoServico-Update/${produtoServico.id_produtoServico}`} className="btn btn-info">Editar</Link>
                            <button className="btn btn-danger" onClick={()=> deleteProdutoServico(produtoServico.id_produtoServico)} >Deletar</button>
                        </td>
                    </tr>
                    ))
                    
}
                </tbody>
            </table>
          
        </div>
        
        
    );
}