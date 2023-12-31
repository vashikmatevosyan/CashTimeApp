import axios from 'axios';
import { storage } from './helpers/Storage';
// 192.168.31.100
// 192.168.5.54
// 192.168.31.139 techno
// 192.168.10.141 Gevor
const api = axios.create({
  baseURL: 'http://192.168.31.139:4000',
});
api.interceptors.request.use((config) => {
  const token = storage.getString('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, (error) => Promise.reject(error));

class Api {
  static jobListFromUsersFilter({
    filter,
    limit,
    page,
    city,
    order,
  }) {
    return api.post(`/jobs/jobs-list-filter?page=${page}&limit=${limit}&city=${city}&order=${order}`, filter);
  }

  static singleJobInfo(id) {
    return api.get(`/jobs/job-singe-info?id=${id}`);
  }

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

  static activate(data) {
    return api.post('/users/activate', data);
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

  static editProfile(data) {
    return api.put('users/edit-employee', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export default Api;
