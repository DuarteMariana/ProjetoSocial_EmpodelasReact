import axios from "axios";

const AFILIACAO_API_URL="https://api-empodelas.herokuapp.com/afiliacao/"; 

class AfiliacaoService {

    getAllAfiliacao() {
        return axios.get(AFILIACAO_API_URL);
    }
    createAfiliacao(afiliacao) {
        return axios.post(AFILIACAO_API_URL, afiliacao);
    }
    getAfiliacaoById(id_afiliacao) {
        return axios.get(AFILIACAO_API_URL + id_afiliacao);
    }
    updateAfiliacao (id_afiliacao, afiliacao) {
        return axios.put(AFILIACAO_API_URL +  id_afiliacao, afiliacao);
    }
    deleteAfiliacao (id_afiliacao) {
        return axios.delete(AFILIACAO_API_URL + id_afiliacao);
    }

}

export default new AfiliacaoService();