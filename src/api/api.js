import axios from "axios";

const url = "https://recolector-url-noc.apps.intvnt.com/product";

export const fetchURL = () => axios.get(url);
export const createURL = (newUrl) => axios.post(`${url}/create`, newUrl);
export const updateURL = (id, updateNewUrl) =>
  axios.put(`${url}/update?productID=${id}`, updateNewUrl);
export const deleteURL = (id) => axios.delete(`${url}/delete/${id}`);
