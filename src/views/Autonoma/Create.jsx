import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AutonomaService from "../../services/AutonomaService";

export default function Create() {
    const [nome_autonoma, setNome_autonoma] = useState("");
    const [email_autonoma, setEmail_autonoma] = useState("");
    const [dataNas_autonoma, setDataNas_autonoma] = useState("");
    const [numTelefone_autonoma, setNumTelefone_autonoma] = useState("");
    const [endereco_autonoma, setEndereco_autonoma] = useState("");
    const [cep_autonoma, setCep_autonoma] = useState("");
    const [nomeNegocio_autonoma, setNomeNegocio_autonoma] = useState("");
    const [contatoNegocio_autonoma, setContatoNegocio_autonoma] = useState("");
    const [categoriaNegocio_autonoma, setCategoriaNegocio_autonoma] = useState("");
    const [descricaoNegocio_autonoma, setDescricaoNegocio_autonoma] = useState("");
    const [comprovanteResid_autonoma, setComprovanteResid_autonoma] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

  const criarOuEditarAutonoma = (e) => {
    e.preventDefault();

    const autonoma = { nome_autonoma, email_autonoma, dataNas_autonoma, numTelefone_autonoma, endereco_autonoma, cep_autonoma, nomeNegocio_autonoma, contatoNegocio_autonoma, categoriaNegocio_autonoma, descricaoNegocio_autonoma, comprovanteResid_autonoma  };

    console.log(autonoma)

    if (id) {
        AutonomaService.updateAutonoma(id, autonoma)
        .then((response) => {
            navigate("/Autonoma")
        })

    } else {
        AutonomaService.createAutonoma(autonoma)
        .then((response) => {
            navigate("/Autonoma")
        })
    }
  }

  useEffect(() => {
      function getAutonomaById() {
        if (id) {
            AutonomaService.getAutonomaById(id)
            .then((response) => {
                setNome_autonoma(response.data.nome_autonoma);
                setEmail_autonoma(response.data.email_autonoma);
                setDataNas_autonoma(response.data.dataNas_autonoma);
                setNumTelefone_autonoma(response.data.numTelefone_autonoma);
                setEndereco_autonoma(response.data.endereco_autonoma);
                setCep_autonoma(response.data.cep_autonoma);
                setNomeNegocio_autonoma(response.data.nomeNegocio_autonoma);
                setContatoNegocio_autonoma(response.data.contatoNegocio_autonoma);
                setCategoriaNegocio_autonoma(response.data.categoriaNegocio_autonoma);
                setDescricaoNegocio_autonoma(response.data.descricaoNegocio_autonoma);
                setComprovanteResid_autonoma(response.data.comprovanteResid_autonoma);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getAutonomaById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">Nome:</label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome_autonoma}
              onChange={(e) => setNome_autonoma(e.target.value)}
            />
          </div>

          <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail:</label>
            <input
            type="email"
            id="email_autonoma"
            className="form-control"
            placeholder="E-mail"
            value={email_autonoma}
            onChange={(e) => setEmail_autonoma(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dataNasc_autonoma" className="form-label">Data de nascimento:</label>
            <input
            type="text"
            id="dataNasc_autonoma"
            className="form-control"
            placeholder="Data de nascimento"
            value={dataNas_autonoma}
            onChange={(e) => setDataNas_autonoma(e.target.value)}
            />
                    
          </div>
            <div className="mb-3">
            <label htmlFor="numTelefone_autonoma" className="form-label">Telefone:</label>
            <input
            type="text"
            id="numTelefone_autonoma"
            className="form-control"
            placeholder="Telefone"
            value={numTelefone_autonoma}
            onChange={(e) => setNumTelefone_autonoma(e.target.value)}
            />
                    
            </div>
            <div className="mb-3">
            <label htmlFor="endereco_autonoma" className="form-label">Endereço:</label>
            <input
            type="text"
            id="endereco_autonoma"
            className="form-control"
            placeholder="Endereço"
            value={endereco_autonoma}
            onChange={(e) => setEndereco_autonoma(e.target.value)}
            />
                    
            </div>
            <div className="mb-3">
            <label htmlFor="cep_autonoma" className="form-label">Cep:</label>
            <input
            type="text"
            id="cep_autonoma"
            className="form-control"
            placeholder="Cep"
            value={cep_autonoma}
            onChange={(e) => setCep_autonoma(e.target.value)}
            />
                    
            </div>
            <div className="mb-3">
            <label htmlFor="nomeNegocio_autonoma" className="form-label">Nome do negocio:</label>
            <input
            type="text"
            id="nomeNegocio_autonoma"
            className="form-control"
            placeholder="Nome do negocio"
            value={nomeNegocio_autonoma}
            onChange={(e) => setNomeNegocio_autonoma(e.target.value)}
            />
                    
            </div>

            <div className="mb-3">
            <label htmlFor="contatoNegocio_autonoma" className="form-label">Contato negocio:</label>
            <input
            type="text"
            id="contatoNegocio_autonoma"
            className="form-control"
            placeholder="Contato"
            value={contatoNegocio_autonoma}
            onChange={(e) => setContatoNegocio_autonoma(e.target.value)}
            />
                    
            </div>

            <div className="mb-3">
            <label htmlFor="categoriaNegocio_autonoma" className="form-label">Categoria Negocio:</label>
            <input
            type="text"
            id="categoriaNegocio_autonoma"
            className="form-control"
            placeholder="Categoria negocio"
            value={categoriaNegocio_autonoma}
            onChange={(e) => setCategoriaNegocio_autonoma(e.target.value)}
            />
                    
            </div>

            <div className="mb-3">
            <label htmlFor="descricaoNegocio_autonoma" className="form-label">Descrição:</label>
            <input
            type="text"
            id="descricaoNegocio_autonoma"
            className="form-control"
            placeholder="Descrição"
            value={descricaoNegocio_autonoma}
            onChange={(e) => setDescricaoNegocio_autonoma(e.target.value)}
            />
                    
            </div>

            <div className="mb-3">
            <label htmlFor="comprovanteResid_autonoma" className="form-label">Comprovante de residência:</label>
            <input
            type="text"
            id="comprovanteResid_autonoma"
            className="form-control"
            placeholder="Comprovante de residencia"
            value={comprovanteResid_autonoma}
            onChange={(e) => setComprovanteResid_autonoma(e.target.value)}
            />
                    
            </div>

          <button type="submit" className="btn btn-success" onClick={(e) => criarOuEditarAutonoma(e)}>
            Enviar
          </button>
          <Link
            to="/Autonoma"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}