import axios from 'axios';

const BASE_URL = 'https://mock-api.driven.com.br/api/v4/driven-plus';


function postSignup(newUserData) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, newUserData);
  return promise;
}

function postLogin(loginUserData) {
  const promise = axios.post(`${BASE_URL}/auth/login`, loginUserData);
  return promise;
}

function getPlansList(token) {
  const auth = {};
  auth.headers = {};
  auth.headers.Authorization = "Bearer " + token;

  const promise = axios.get(`${BASE_URL}/subscriptions/memberships`, auth);
  return promise;
}

export { postSignup, postLogin, getPlansList };