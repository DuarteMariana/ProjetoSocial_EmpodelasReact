import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AfiliadaService from "../../services/AfiliadaService";

export default function Index() {
    const [afiliada, setAfiliada] = useState([]);
    

    const getAllAfiliada = () => {
        AfiliadaService.getAllAfiliada().then((response)=> {
            setAfiliada(response.data);
            console.log(response.data)
        }).catch((error)=> {
            console.log(error);
        });
    }
    useEffect(() => {
        getAllAfiliada();
    }, [])

    const deleteAfiliada = (id_afiliada) => {
        AfiliadaService.deleteAfiliada(id_afiliada).then((response)=>{
            getAllAfiliada(id_afiliada);
        })
    }
    
    

    return (
        <div className="table-responsive-sm">
            <br/>
            <Link to="/Afiliada-Create" className="btn btn-warning">Cadastrar Afiliada</Link>
            <table id="example" className="display dataTable dtr-inline table table-hover" cellspacing="0" width="100%" role="grid" aria-describedby="example_info" style={{width:"100%", tableLayout:"fixed"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Email</th>
                        <th>Data de nascimento</th>
                        <th>Numero de telefone</th>
                        <th>Endereço</th>
                        <th>Cep</th>
                        <th>Descrição</th>
                        <th>Comprovante de residência</th>
                        
                    </tr>
                </thead>
                <tbody >
                {
                    afiliada.map((afiliada)=> (
                        <tr key= {afiliada.id_afiliada} >
                        <td >{afiliada.id_afiliada}</td>
                        <td>{afiliada.nome_afiliada}</td>
                        <td >{afiliada.sobrenome_afiliada}</td>
                        <td >{afiliada.email_afiliada}</td>
                        <td >{afiliada.dataNasc_afiliada}</td>
                        <td >{afiliada.numTelefone_afiliada}</td>
                        <td >{afiliada.endereco_afiliada}</td>
                        <td >{afiliada.cep_afiliada}</td>
                        <td>{afiliada.descricao_afiliada}</td>
                        <td>{afiliada.comprovanteResid_afiliada}</td>
                        <td>
                            <Link to={`/Afiliada-Update/${afiliada.id_afiliada}`} className="btn btn-info">Editar</Link>
                            <button className="btn btn-danger" onClick={()=> deleteAfiliada(afiliada.id_afiliada)} >Deletar</button>
                        </td>
                    </tr>
                    ))
                    
}
                </tbody>
            </table>
          
        </div>
    );
}