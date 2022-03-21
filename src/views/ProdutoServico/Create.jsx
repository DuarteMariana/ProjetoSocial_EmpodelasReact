import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProdutoServicoService from "../../services/ProdutoServicoService";
import AutonomaService from "../../services/AutonomaService.js"
export default function Create() {
    const [codigo_produtoServico, setCodigo_produtoServico] = useState("");
    const [tipo_produtoServico, setTipo_produtoServico] = useState("");
    const [nome_produtoServico, setNome_produtoServico] = useState("");
    const [descricao_produtoServico, setDescricao_produtoServico] = useState("");
    const [imagemURL_produtoServico, setImagemURL_produtoServico] = useState("");
    const [autonoma, setAutonoma] = useState({id_autonoma: "", nome_autonoma: ""})
    const [autonomas, setAutonomas] = useState([]);
    const [preco_produtoServico, setPreco_produtoServico] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();


    const getAllAutonoma = () => {
      AutonomaService.getAllAutonoma()
      .then((response) => {
        setAutonomas(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
    }

    useEffect(() => {
      getAllAutonoma();
    }, []);

  const criarOuEditarProdutoOuServico = (e) => {
    e.preventDefault();

    const produtoServico = { codigo_produtoServico, tipo_produtoServico, nome_produtoServico, descricao_produtoServico, imagemURL_produtoServico, preco_produtoServico, autonoma };

    console.log(produtoServico)

    if (id) {
        ProdutoServicoService.updateProdutoServico(id, produtoServico)
        .then((response) => {
            navigate("/ProdutoServico")
            console.log(id);
        })

    } else {
        ProdutoServicoService.createProdutoServico(produtoServico)
        .then((response) => {
            navigate("/ProdutoServico")
        })
    }
  }

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
                setAutonoma({
                  id_autonoma: response.data.autonoma.id_autonoma,
                  nome_autonoma: response.data.autonoma.nome_autonoma
                });
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getProdutoServicoById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">Código do produto/serviço:</label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={codigo_produtoServico}
              onChange={(e) => setCodigo_produtoServico(e.target.value)}
            />
          </div>

          <div className="mb-3">
          <label htmlFor="tipo_produtoServico" className="form-label">Tipo produto/serviço:</label>
            <input
            type="text"
            id="tipo_produtoServico"
            className="form-control"
            placeholder="Produto ou Serviço"
            value={tipo_produtoServico}
            onChange={(e) => setTipo_produtoServico(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nome_produtoServico" className="form-label">Nome do produto/serviço:</label>
            <input
            type="text"
            id="nome_produtoServico"
            className="form-control"
            placeholder="Nome"
            value={nome_produtoServico}
            onChange={(e) => setNome_produtoServico(e.target.value)}
            />
                    
          </div>
            <div className="mb-3">
            <label htmlFor="descricao_produtoServico" className="form-label">Descrição do produto/serviço:</label>
            <input
            type="text"
            id="descricao_produtoServico"
            className="form-control"
            placeholder="Descrição"
            value={descricao_produtoServico}
            onChange={(e) => setDescricao_produtoServico(e.target.value)}
            />
                    
            </div>
            <div className="mb-3">
            <label htmlFor="imagemURL_produtoServico" className="form-label">Imagem:</label>
            <input
            type="text"
            id="imagemURL_produtoServico"
            className="form-control"
            placeholder="URL da imagem"
            value={imagemURL_produtoServico}
            onChange={(e) => setImagemURL_produtoServico(e.target.value)}
            />
                    
            </div>
            <div className="mb-3">
            <label htmlFor="descricao_produtoServico" className="form-label">Preço:</label>
            <input
            type="text"
            id="descricao_produtoServico"
            className="form-control"
            placeholder="Preço"
            value={preco_produtoServico}
            onChange={(e) => setPreco_produtoServico(e.target.value)}
            />

        <div className="form-group mb-3">
          <label htmlFor="Autonoma" className="form-label">
            Autonoma
        </label>
        <select
          id_autonoma="AutonomaId_autonoma"
          nome_autonoma="AutonomaId_autonoma"
          className="form-select"
          onChange={(e) =>
          setAutonoma({ id_autonoma: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id? autonoma.nome_autonoma : 'Escolha um editora'}</option>
              {autonomas.map((autonoma) => (
                <option key={autonoma.id_autonoma} value={autonoma.id_autonoma}>
                  {autonoma.nome_autonoma}
                </option>
              ))}
            </select>
          </div>
                    
            </div>

          <button type="submit" className="btn btn-success" onClick={(e) => criarOuEditarProdutoOuServico(e)}>
            Enviar
          </button>
          <Link
            to="/ProdutoServico"
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