import axios from "axios";
require('dotenv').config();

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: {
	  'Access-Control-Allow-Origin': '*',
	},
});

export default instance;