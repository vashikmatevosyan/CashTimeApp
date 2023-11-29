import axios from 'axios';
import { storage } from './helpers/Storage';
// 192.168.31.100
// 192.168.5.54
const api = axios.create({
  baseURL: 'http://192.168.31.114:4000',
});
api.interceptors.request.use((config) => {
  const token = storage.getString('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, (error) => Promise.reject(error));

class Api {
  static jobListFromUsersMap(city) {
    return api.get(`/jobs/jobs-list-map?city=${city}`);
  }

  static noticeList(page, limit) {
    return api.get(`/notice/list?page=${page}&limit=${limit}`);
  }

  static register(data) {
    return api.post('/users/register', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static login(email, password, type) {
    return api.post('/users/login', {
      email,
      password,
      type,
    });
  }

  static getProfile() {
    return api.get('/users/profile');
  }

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
