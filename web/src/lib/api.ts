import axios from "axios";

// change the url for prod
export const api = axios.create({
  baseURL: 'http://localhost:3333',
})