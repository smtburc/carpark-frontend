/**
 * StorageService browser tabanlı depolama için kullanılır.
 * Default olarak sessionStorage nesnesini kullanır.
 *
 * @class
 * @example
 * import StorageService from "./services/StorageService";
 * StorageService.setItem("name", {name: "Samet"});
 * const name = StorageService.getItem("name");
 * StorageService.deleteItem("name");
 */
const StorageService = {
  /**
   * Verilen değeri verilen isimle kaydeder.
   * @param {string} name   Hangi isimle kayıt edilecek.
   * @param {string} value  Kaydedilecek değer.
   */
  setItem(name, value) {
    localStorage.setItem(name, value);
  },
  /**
   * Verilen isimdeki değeri geri getirir.
   * @param   {string} name   Kayıt ismi.
   * @returns {object}
   */
  getItem(name) {
    return localStorage.getItem(name);
  },
  /**
   * Verilen isimdeki değeri siler.
   * @param {string} name   Kayıt ismi.
   */
  deleteItem(name) {
    return localStorage.removeItem(name);
  }
};

export default StorageService;
