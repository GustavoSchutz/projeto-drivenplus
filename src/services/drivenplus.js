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

function getPlanInfo(token, id) {
  const auth = {};
  auth.headers = {};
  auth.headers.Authorization = "Bearer " + token;

  const promise = axios.get(`${BASE_URL}/subscriptions/memberships/${id}`, auth);
  return promise;
}

function postCardForms(body, token) {
  const auth = {};
  auth.headers = {};
  auth.headers.Authorization = "Bearer " + token;

  const promise = axios.post(`${BASE_URL}/subscriptions`, body, auth);
  return promise;
}
function deletePlan(token) {
  const auth = {};
  auth.headers = {};
  auth.headers.Authorization = "Bearer " + token;

  const promise = axios.delete(`${BASE_URL}/subscriptions`, auth);
  return promise;
}

export { postSignup, postLogin, getPlansList, getPlanInfo, postCardForms, deletePlan };