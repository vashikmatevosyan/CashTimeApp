import axios from 'axios';
// 192.168.10.141
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

  static createJob(data) {
    return api.post('/jobs/job-create', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export default Api;
