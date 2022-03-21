import axios from "axios";

const AUTONOMA_API_URL="https://api-empodelas.herokuapp.com/autonoma/"; 

class AutonomaService {

    getAllAutonoma() {
        return axios.get(AUTONOMA_API_URL);
    }
    createAutonoma(autonoma) {
        return axios.post(AUTONOMA_API_URL, autonoma);
    }
    getAutonomaById(id_autonoma) {
        return axios.get(AUTONOMA_API_URL + id_autonoma);
    }
    updateAutonoma (id_autonoma, autonoma) {
        return axios.put(AUTONOMA_API_URL + id_autonoma, autonoma);
    }
    deleteAutonoma (id_autonoma) {
        return axios.delete(AUTONOMA_API_URL + id_autonoma);
    }

}

export default new AutonomaService();