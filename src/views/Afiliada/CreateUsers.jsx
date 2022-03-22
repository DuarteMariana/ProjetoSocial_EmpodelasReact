import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AfiliadaService from "../../services/AfiliadaService";

export default function CreateUsers() {
    const [nome_afiliada, setNome_afiliada] = useState("");
    const [sobrenome_afiliada, setSobrenome_afiliada] = useState("");
    const [email_afiliada, setEmail_afiliada] = useState("");
    const [dataNasc_afiliada, setDataNasc_afiliada] = useState("");
    const [numTelefone_afiliada, setNumTelefone_afiliada] = useState("");
    const [endereco_afiliada, setEndereco_afiliada] = useState("");
    const [cep_afiliada, setCep_afiliada] = useState("");
    const [descricao_afiliada, setDescricao_afiliada] = useState("");
    const [comprovanteResid_afiliada, setComprovanteResid_afiliada] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

  const criarOuEditarAfiliada = (e) => {
    e.preventDefault();

    const afiliada = { nome_afiliada, sobrenome_afiliada, email_afiliada, dataNasc_afiliada, numTelefone_afiliada, endereco_afiliada, cep_afiliada, descricao_afiliada, comprovanteResid_afiliada };

    console.log(afiliada)

    if (id) {
        AfiliadaService.updateAfiliada(id, afiliada)
        .then((response) => {
            navigate("/")
        })

    } else {
        AfiliadaService.createAfiliada(afiliada)
        .then((response) => {
            navigate("/cadastro_concluido")
        })
    }
  }

  useEffect(() => {
      function getAfiliadaById() {
        if (id) {
            AfiliadaService.getAfiliadaById(id)
            .then((response) => {
                setNome_afiliada(response.data.nome_afiliada);
                setSobrenome_afiliada(response.data.sobrenome_afiliada);
                setEmail_afiliada(response.data.email_afiliada);
                setDataNasc_afiliada(response.data.dataNasc_afiliada);
                setNumTelefone_afiliada(response.data.numTelefone_afiliada);
                setEndereco_afiliada(response.data.endereco_afiliada);
                setCep_afiliada(response.data.cep_afiliada);
                setDescricao_afiliada(response.data.descricao_afiliada);
                setComprovanteResid_afiliada(response.data.comprovanteResid_afiliada);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getAfiliadaById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center" style={{fontSize: "40px"}}>Afiliada - pré cadastro</h2>
            <img style={{marginLeft: "20%", marginRight:"20%"}} src="./img/imgDestaque.jpg" alt="imagem destaque da logo" />
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">Nome:</label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome_afiliada}
              onChange={(e) => setNome_afiliada(e.target.value)}
            />
          </div>

          <div className="mb-3">
          <label htmlFor="email" className="form-label">Sobrenome:</label>
            <input
            type="text"
            id="Sobrenome"
            className="form-control"
            placeholder="Sobrenome"
            value={sobrenome_afiliada}
            onChange={(e) => setSobrenome_afiliada(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">E-mail:</label>
            <input
            type="email"
            id="email"
            className="form-control"
            placeholder="E-mail"
            value={email_afiliada}
            onChange={(e) => setEmail_afiliada(e.target.value)}
            />
                    
          </div>
            <div className="mb-3">
            <label htmlFor="dataNasc_afiliada" className="form-label">Data de nascimento:</label>
            <input
            type="text"
            id="dataNasc_afiliada"
            className="form-control"
            placeholder="Ex: 01/01/1001"
            value={dataNasc_afiliada}
            onChange={(e) => setDataNasc_afiliada(e.target.value)}
            />
                    
            </div>
            <div className="mb-3">
            <label htmlFor="numTelefone_afiliada" className="form-label">Telefone:</label>
            <input
            type="text"
            id="numTelefone_afiliada"
            className="form-control"
            placeholder="Numero de telefone"
            value={numTelefone_afiliada}
            onChange={(e) => setNumTelefone_afiliada(e.target.value)}
            />
                    
            </div>
            <div className="mb-3">
            <label htmlFor="endereco_afiliada" className="form-label">Endereço:</label>
            <input
            type="text"
            id="endereco_afiliada"
            className="form-control"
            placeholder="Endereço"
            value={endereco_afiliada}
            onChange={(e) => setEndereco_afiliada(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="cep_afiliada" className="form-label">Cep:</label>
            <input
            type="text"
            id="cep_afiliada"
            className="form-control"
            placeholder="Cep"
            value={cep_afiliada}
            onChange={(e) => setCep_afiliada(e.target.value)}
            />
                    
            </div>
            <div className="mb-3">
            <label htmlFor="descricao_afiliada" className="form-label">Descrição:</label>
            <input
            type="text"
            id="descricao_afiliada"
            className="form-control"
            placeholder="Descrição"
            value={descricao_afiliada}
            onChange={(e) => setDescricao_afiliada(e.target.value)}
            />
                    
            </div>

            <div className="mb-3">
            <label htmlFor="comprovanteResid_afiliada" className="form-label">Comprovante:</label>
            <input
            type="text"
            id="comprovanteResid_afiliada"
            className="form-control"
            placeholder="Contato"
            value={comprovanteResid_afiliada}
            onChange={(e) => setComprovanteResid_afiliada(e.target.value)}
            />
                    
            </div>

          <button type="submit" className="btn btn-success" onClick={(e) => criarOuEditarAfiliada(e)}>
            Enviar
          </button>
        </fieldset>
      </form>
    </div>
  );
}