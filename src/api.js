import axios from 'axios';
import config from './config.js';

export const apiAdmin = axios.create({
  baseURL: config.baseUrlAdmin,
  headers: { Authorization: `Bearer ${config.tokenAdmin}` }
});

export const apiUser = axios.create({
  baseURL: config.baseUrlUser,
  headers: { Authorization: `Bearer ${config.tokenUser}` }
});