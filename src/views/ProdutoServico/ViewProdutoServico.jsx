import React, { Component, useEffect, useState } from 'react';
import ProdutoServicoService from '../../services/ProdutoServicoService';
import { useParams } from 'react-router-dom';


export default function ViewProdutoServico() {
    const [codigo_produtoServico, setCodigo_produtoServico] = useState("");
    const [tipo_produtoServico, setTipo_produtoServico] = useState("");
    const [nome_produtoServico, setNome_produtoServico] = useState("");
    const [descricao_produtoServico, setDescricao_produtoServico] = useState("");
    const [imagemURL_produtoServico, setImagemURL_produtoServico] = useState("");
    const [preco_produtoServico, setPreco_produtoServico] = useState("");
    const [contatoNegocio_autonoma, setContatoNegocio_autonoma] = useState("");
    const { id } = useParams()
   
    useEffect(() => {
        function getProdutoServicoById() {
          if (id) {
              ProdutoServicoService.getProdutoServicoById(id)
              .then((response) => {
                  setCodigo_produtoServico(response.data.codigo_produtoServico);
                  setTipo_produtoServico(response.data.tipo_produtoServico);
                  setNome_produtoServico(response.data.nome_produtoServico);
                  setDescricao_produtoServico(response.data.descricao_produtoServico);
                  setImagemURL_produtoServico(response.data.imagemURL_produtoServico);
                  setPreco_produtoServico(response.data.preco_produtoServico);
                  setContatoNegocio_autonoma(response.data.autonoma.contatoNegocio_autonoma);
              })
              .catch((error) => {
                  console.log(error);
              })
          }
        }
        getProdutoServicoById()
    }, [id]);

  return (
    <main>
        <div id='card' className='container row'>
            <div className='col' id="imagem_produto"><img src={imagemURL_produtoServico}/></div>
            <div className='col'>
                <label>{tipo_produtoServico}</label>
                <h1>{nome_produtoServico}</h1>
                <hr />
                <label>Preço</label>
                <p>R${preco_produtoServico}</p>
                <label>Descrição:</label>
                <p>{descricao_produtoServico}</p>
                <label>Vendedora</label>
                <p>Autonoma</p>
                <button className='btn btn-success'><a href={"https://api.whatsapp.com/send?phone=" + contatoNegocio_autonoma}>Falar com a Autônoma</a></button>
            
            </div>       
        </div>
    </main>
  );
}