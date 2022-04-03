import axios from "axios";
import {Modal} from "antd";
import TokenService from "./TokenService";

/**
 * Token kontrolü TokenService üzerinden sorgulanıyor.
 */
const token = TokenService.getToken();
const baseURL = "http://localhost:8086/api/v1/";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
/**
 * Bir axios client' ı yaratılıyor.
 */
const client = axios.create({
  withCredentials: true,
  baseURL: baseURL,
  cancelToken: source.token,
});

/**
 * default davranışlar burada setleniyor.
 */
client.defaults.headers.common["Content-Type"] = "application/json;charset=UTF-8";
client.defaults.timeout = 60000;

if (token) client.defaults.headers.common["Authorization"] = token ? token : "";
/**
 * Bir request göndermeyi sağlar.
 * Request nesnesi içerisinde gönderilebilecek 'method' parametresi get, post, put ve delete olabilir.
 * Daha fazla ayrıntı için bkz: https://github.com/axios/axios
 *
 * @param {object} request Request objesi.
 * @param {object} options config objesi isteğe bağlıdır.
 * @returns {Promise} Geriye bir Promise nesnesi döndürür.
 * @example
 * beginRequest({url: "/users"}).then(response => console.log(response));
 * beginRequest({url: "/users"}, {timeout: 120000}).then(response => console.log(response));
 */
export const beginRequest = (request, options) => {
  return client(request, options).catch(obj=>console.error(obj));
};

/**
 * Get isteği gönderir
 * Daha fazla ayrıntı için bkz: https://github.com/axios/axios
 *
 * @param {object} request Request objesi.
 * @param {object} options config objesi isteğe bağlıdır.
 * @returns {Promise} Geriye bir Promise nesnesi döndürür.
 * @example
 * getRequest("/users").then(response => console.log(response));
 * get("/users", {timeout: 120000}).then(response => console.log(response));
 */
export const getRequest = (url, options) => {
  return client.get(url, options).catch(function (error) {
    if (error.response.status == 401) {
      Modal.error({
        title: "Hata",
        content: "Oturumunuz Sonlanmıştır",
      });
      TokenService.deleteToken();
      window.location.reload();
    }
  });
};

/**
 * Post isteği gönderir
 * Daha fazla ayrıntı için bkz: https://github.com/axios/axios
 *
 * @param {object} request Request objesi.
 * @param {object} body Payload objesi.
 * @param {object} options config objesi isteğe bağlıdır.
 * @returns {Promise} Geriye bir Promise nesnesi döndürür.
 * @example
 * postRequest("/users", {firstname: Joe, lastname: "Doe"}, {timeout: 120000}).then(response => console.log(response));
 * postRequest("/users", {firstname: Joe, lastname: "Doe"}, {timeout: 120000}).then(response => console.log(response));
 */
export const postRequest = (url, body, options) => {
  // return client.post(url, body, options).catch(obj=>console.error(obj));
  return client.post(url, body, options).catch(function (error) {
    if (error.response.status == 401) {
      Modal.error({
        title: "Hata",
        content: "Oturumunuz Sonlanmıştır",
      });
      TokenService.deleteToken();
      window.location.reload();
    }else if (error.response.status == 400) {
      Modal.error({
        title: "Hata",
        content: error.response.data,
      });
    }
  });
};

/**
 * Put isteği gönderir
 * Daha fazla ayrıntı için bkz: https://github.com/axios/axios
 *
 * @param {object} request Request objesi.
 * @param {object} body Payload objesi.
 * @param {object} options config objesi isteğe bağlıdır.
 * @returns {Promise} Geriye bir Promise nesnesi döndürür.
 * @example
 * putRequest("/users", {firstname: Joe, lastname: "Doe"}, {timeout: 120000}).then(response => console.log(response));
 * putRequest("/users", {firstname: Joe, lastname: "Doe"}, {timeout: 120000}).then(response => console.log(response));
 */
export const putRequest = (url, body, options) => {
  return client.put(url, body, options).catch(obj=>console.error(obj));
};

/**
 * Delete isteği gönderir
 * Daha fazla ayrıntı için bkz: https://github.com/axios/axios
 *
 * @param {object} request Request objesi.
 * @param {object} options config objesi isteğe bağlıdır.
 * @returns {Promise} Geriye bir Promise nesnesi döndürür.
 * @example
 * deleteRequest("/users/1678", {timeout: 120000}).then(response => console.log(response));
 * deleteRequest("/users/1678", {timeout: 120000}).then(response => console.log(response));
 */
export const deleteRequest = (url, options) => {
  return client.delete(url, options).catch(obj=>console.error(obj));
};

