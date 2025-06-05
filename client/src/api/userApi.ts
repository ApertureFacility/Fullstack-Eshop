import axios from 'axios';

const API_URL = 'http://localhost:7000/api/user'; 

export const registration = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/registration`, { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const checkAuth = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/auth`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  localStorage.setItem('token', response.data.token);
  return response.data;
};
