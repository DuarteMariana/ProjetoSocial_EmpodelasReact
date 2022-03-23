import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AfiliacaoService from "../../services/AfiliacaoService";
import AfiliadaService from "../../services/AfiliadaService.js";
import ProdutoServicoService from "../../services/ProdutoServicoService.js"

export default function Create() {
    const [codigo_produtoServico, setCodigo_produtoServico] = useState("");
    const [descricao_afiliacao, setDescricao_afiliacao] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const [afiliada, setAfiliada] = useState({id_afiliada: "", nome_afiliada: ""});
    const [afiliadas, setAfiliadas] = useState([]);

    const [produtoServico, setProdutoServico] = useState({id_produtoServico: "", nome_produtoServico: ""});
    const [produtoServicos, setProdutosServicos] = useState([]);

    const getAllProdutoServicos = () => {
      ProdutoServicoService.getAllProdutoServico()
      .then((response) => {
        setProdutosServicos(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    useEffect(() => {
      getAllProdutoServicos();
    }, [])

    const getAllAfiliadas = () =>{
      AfiliadaService.getAllAfiliada()
      .then((response) => {
        setAfiliadas(response.data)
      })
      .catch((error) =>{
        console.log(error);
      })
    };

    useEffect(() => {
      getAllAfiliadas();
    }, [])

  const criarOuEditarAfiliacao = (e) => {
    e.preventDefault();
    
    const afiliacao = { codigo_produtoServico, descricao_afiliacao, afiliada, produtoServico};

    console.log(afiliacao)

    if (id) {
        AfiliacaoService.updateAfiliacao(id, afiliacao)
        .then((response) => {
            navigate("/Afiliacao")
        })

    } else {
        AfiliacaoService.createAfiliacao(afiliacao)
        .then((response) => {
            navigate("/Afiliacao/Concluida")
        })
    }
  }

  useEffect(() => {
      function getAfiliacaoById() {
        if (id) {
            AfiliacaoService.getAfiliacaoById(id)
            .then((response) => {
                setCodigo_produtoServico(response.data.codigo_produtoServico);
                setDescricao_afiliacao(response.data.descricao_afiliacao);
                setAfiliada({
                  id_afiliada: response.data.afiliada.id_afiliada,
                  nome_afiliada: response.data.afiliada.nome_afiliada
                });
                setProdutoServico({
                  id_produtoServico: response.data.produtoServico.id_produtoServico,
                  nome_produtoServico: response.data.produtoServico.nome_produtoServico
                })
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getAfiliacaoById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">Afiliar-se</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="codigo" className="form-label">Digite o seu sobrenome e cinco números aleatórios para criar um código</label>
            <input
              type="text"
              id="codigo"
              className="form-control"
              placeholder="Código"
              value={codigo_produtoServico}
              onChange={(e) => setCodigo_produtoServico(e.target.value)}
            />
          </div>

          <div className="mb-3">
          <label htmlFor="descrição" className="form-label">Digite uma descrição para sua afiliação</label>
            <input
            type="text"
            id="descrição"
            className="form-control"
            placeholder="Descrição"
            value={descricao_afiliacao}
            onChange={(e) => setDescricao_afiliacao(e.target.value)}
            />
          </div>
          
          <div className="form-group mb-3">
            <label htmlFor="Afiliada" className="form-label">
              Selecione o seu cadastro:
            </label>
            <select
              id_afiliada="Afiliada"
              nome_afiliada="Afiliada"
              className="form-select"
              onChange={(e) =>
                setAfiliada({ id_afiliada: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? afiliada.nome_afiliada : 'Escolha um editora'}</option>
              {afiliadas.map((afiliada) => (
                <option key={afiliada.id_afiliada} value={afiliada.id_afiliada}>
                  {afiliada.nome_afiliada} 
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="ProdutoServico" className="form-label">
              Escolha o produto ou serviço para se afiliar
            </label>
            <select
              id_produtoServico="ProdutoServico"
              nome_produtoServico="ProdutoServico"
              className="form-select"
              onChange={(e) =>
                setProdutoServico({ id_produtoServico: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? produtoServico.nome_produtoservico : 'Escolha um editora'}</option>
              {produtoServicos.map((produtoServico) => (
                <option key={produtoServico.id_produtoServico} value={produtoServico.id_produtoServico}>
                  {produtoServico.nome_produtoServico}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-success" onClick={(e) => criarOuEditarAfiliacao(e)}>
            Enviar
          </button>
          
        </fieldset>
      </form>
    </div>
  );
}