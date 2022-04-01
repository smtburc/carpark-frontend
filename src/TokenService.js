// import { StorageService } from "./carpark";

import StorageService from "./StorageService";

const defaultName = "token";

/**
 * TokenService browser taraflı token işlemleri için kullanlılır.
 *
 * @class
 * @example
 * import TokenService from "./services/TokenService";
 * TokenService.setToken("token_string");
 * const token = TokenService.getToken();
 * TokenService.deleteToken();
 */
const TokenService = {
  /**
   * Token' ı kaydeder.
   * @param {string} value  Kaydedilecek değer.
   */
  setToken(value) {
    StorageService.setItem(defaultName, value);
  },
  /**
   * Token' ı geri döndürür.
   * @param   {string} name   Kayıt ismi.
   * @returns {string}
   */
  getToken() {
    return StorageService.getItem(defaultName);
  },
  /**
   * Token' ı siler.
   */
  deleteToken() {
    return StorageService.deleteItem(defaultName);
  }
};

export default TokenService;
