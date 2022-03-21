import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AutonomaService from "../../services/AutonomaService";

export default function Index() {
    const [autonoma, setAutonoma] = useState([]);
    

    const getAllAutonoma = () => {
        AutonomaService.getAllAutonoma().then((response)=> {
            setAutonoma(response.data);
            console.log(response.data)
        }).catch((error)=> {
            console.log(error);
        });
    }
    useEffect(() => {
        getAllAutonoma();
    }, [])

    const deleteAutonoma = (id_autonoma) => {
        AutonomaService.deleteAutonoma(id_autonoma).then((response)=>{
            getAllAutonoma(id_autonoma);
        })
    }
    
    

    return (
        <div className="table-responsive-sm">
            <br/>
            <Link to="/Autonoma-Create" className="btn btn-warning">Cadastrar Autonoma</Link>
            <table id="example" className="display dataTable dtr-inline table table-hover" cellspacing="0" width="100%" role="grid" aria-describedby="example_info" style={{width:"100%", tableLayout:"fixed"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Data de nascimento</th>
                        <th>Numero de telefone</th>
                        <th>Endereço</th>
                        <th>Cep</th>
                        <th>Nome negocio</th>
                        <th>Contato negocio</th>
                        <th>Categoria negocio</th>
                        <th>Descrição</th>
                        <th>Comprovante de residência</th>
                    </tr>
                </thead>
                <tbody >
                {
                    autonoma.map((autonoma)=> (
                        <tr key= {autonoma.id_autonoma} >
                        <td >{autonoma.id_autonoma}</td>
                        <td>{autonoma.nome_autonoma}</td>
                        <td >{autonoma.email_autonoma}</td>
                        <td >{autonoma.dataNasc_autonoma}</td>
                        <td >{autonoma.numTelefone_autonoma}</td>
                        <td >{autonoma.endereco_autonoma}</td>
                        <td >{autonoma.cep_autonoma}</td>
                        <td >{autonoma.nomeNegocio_autonoma}</td>
                        <td>{autonoma.contatoNegocio_autonoma}</td>
                        <td>{autonoma.categoriaNegocio_autonoma}</td>
                        <td>{autonoma.descricaoNegocio_autonoma}</td>
                        <td>{autonoma.comprovanteResid_autonoma}</td>
                        <td>
                            <Link to={`/Autonoma-Update/${autonoma.id_autonoma}`} className="btn btn-info">Editar</Link>
                            <button className="btn btn-danger" onClick={()=> deleteAutonoma(autonoma.id_autonoma)} >Deletar</button>
                        </td>
                    </tr>
                    ))
                    
}
                </tbody>
            </table>
          
        </div>
    );
}