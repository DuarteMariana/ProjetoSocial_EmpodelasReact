import axios from "axios";

const AFILIADA_API_URL="http://localhost:8080/afiliada/"; 

class AfiliadaService {

    getAllAfiliada() {
        return axios.get(AFILIADA_API_URL);
    }
    createAfiliada(afiliada) {
        return axios.post(AFILIADA_API_URL, afiliada);
    }
    getAfiliadaById(id_afiliada) {
        return axios.get(AFILIADA_API_URL + '/' + id_afiliada);
    }
    updateAfiliada (id_afiliada, afiliada) {
        return axios.put(AFILIADA_API_URL + '/' + id_afiliada, afiliada);
    }
    deleteAfiliada (id_afiliada) {
        return axios.delete(AFILIADA_API_URL + '/' + id_afiliada);
    }

}

export default new AfiliadaService();