import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AfiliacaoService from "../../services/AfiliacaoService";

export default function Index() {
    const [afiliacao, setAfiliacao] = useState([]);
    

    const getAllAfiliacao = () => {
        AfiliacaoService.getAllAfiliacao().then((response)=> {
            setAfiliacao(response.data);
            console.log(response.data)
        }).catch((error)=> {
            console.log(error);
        });
    }
    useEffect(() => {
        getAllAfiliacao();
    }, [])

    const deleteAfiliacao = (id_afiliacao) => {
        AfiliacaoService.deleteAfiliacao(id_afiliacao).then((response)=>{
            getAllAfiliacao(id_afiliacao);
        })
    }
    
    

    return (
        <div className="table-responsive-sm">
            <br/>
            <Link to="/Afiliacao-Create" className="btn btn-warning">Cadastrar Afiliação</Link>
            <table id="example" className="display dataTable dtr-inline table table-hover" cellspacing="0" width="100%" role="grid" aria-describedby="example_info" style={{width:"100%", tableLayout:"fixed"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Código produto/serviço</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody >
                {
                    afiliacao.map((afiliacao)=> (
                        <tr key= {afiliacao.id_afiliacao} >
                        <td >{afiliacao.id_afiliacao}</td>
                        <td>{afiliacao.codigo_produtoServico}</td>
                        <td >{afiliacao.descricao_afiliacao}</td>
                        <td>
                            <Link to={`/Afiliacao-Update/${afiliacao.id_afiliacao}`} className="btn btn-info">Editar</Link>
                            <button className="btn btn-danger" onClick={()=> deleteAfiliacao(afiliacao.id_afiliacao)} >Deletar</button>
                        </td>
                    </tr>
                    ))
                    
}
                </tbody>
            </table>
          
        </div>
    );
}