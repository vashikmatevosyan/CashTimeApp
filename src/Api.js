import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.31.139:4000',
});
class Api {
  static getCountries() {
    return api.get('/app/get-countries');
  }

  static getSkills(q = '') {
    return api.get(`/app/get-skills?q=${q}`);
  }
}

export default Api;
