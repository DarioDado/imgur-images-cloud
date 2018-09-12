export default {
  getData(key) {
    return window.localStorage.getItem(key);
  },
  setData(key,data) {
    window.localStorage.setItem(key,data);
  },
  deleteData(key) {
    window.localStorage.removeItem(key);
  },
}