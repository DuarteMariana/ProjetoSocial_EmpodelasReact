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
              })
              .catch((error) => {
                  console.log(error);
              })
          }
        }
        getProdutoServicoById()
    }, [id]);

  return (
    <div className='container row'>
        <div className='col'><img src={imagemURL_produtoServico}/></div>
        <div className='col'>
            <label>{tipo_produtoServico}</label>
            <h1>{nome_produtoServico}</h1>
            <label>Preço</label>
            <p>R${preco_produtoServico}</p>
            <label>Descrição:</label>
            <p>{descricao_produtoServico}</p>
            <label>Vendedora</label>
            <p>Autonoma</p>
            <button className='btn btn-success'>Falar com a Autônoma</button>
        </div>

        
    </div>
  );
}