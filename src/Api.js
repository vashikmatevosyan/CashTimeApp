import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});
class Api {
  static getCountries() {
    return api.get('/app/get-countries');
  }
}

export default Api;
