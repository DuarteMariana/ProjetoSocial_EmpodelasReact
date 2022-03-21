import axios from "axios";

const PRODUTOSERVICO_API_URL="http://localhost:8080/produto_servico/"; 

class ProdutoServicoService {

    getAllProdutoServico() {
        return axios.get(PRODUTOSERVICO_API_URL);
    }
    createProdutoServico(produtoServico) {
        return axios.post(PRODUTOSERVICO_API_URL, produtoServico);
    }
    getProdutoServicoById(id_produtoServico) {
        return axios.get(PRODUTOSERVICO_API_URL + '/' + id_produtoServico);
    }
    updateProdutoServico (id_produtoServico, produtoServico ) {
        return axios.put(PRODUTOSERVICO_API_URL + '/' + id_produtoServico, produtoServico);
    }
    deleteProdutoServico (id_produtoServico) {
        return axios.delete(PRODUTOSERVICO_API_URL + '/' + id_produtoServico);
    }

}

export default new ProdutoServicoService();