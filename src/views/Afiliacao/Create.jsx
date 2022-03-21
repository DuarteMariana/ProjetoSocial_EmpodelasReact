import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AfiliacaoService from "../../services/AfiliacaoService";

export default function Create() {
    const [codigo_produtoServico, setCodigo_produtoServico] = useState("");
    const [descricao_afiliacao, setDescricao_afiliacao] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

  const criarOuEditarAfiliacao = (e) => {
    e.preventDefault();

    const afiliacao = { codigo_produtoServico, descricao_afiliacao};

    console.log(afiliacao)

    if (id) {
        AfiliacaoService.updateAfiliacao(id, afiliacao)
        .then((response) => {
            navigate("/Afiliacao")
        })

    } else {
        AfiliacaoService.createAfiliacao(afiliacao)
        .then((response) => {
            navigate("/Afiliacao")
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
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="codigo" className="form-label">Código produto/serviço:</label>
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
          <label htmlFor="descrição" className="form-label">Descrição afiliação:</label>
            <input
            type="text"
            id="descrição"
            className="form-control"
            placeholder="Descrição"
            value={descricao_afiliacao}
            onChange={(e) => setDescricao_afiliacao(e.target.value)}
            />
          </div>
          

          <button type="submit" className="btn btn-success" onClick={(e) => criarOuEditarAfiliacao(e)}>
            Enviar
          </button>
          <Link
            to="/Afiliacao"
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