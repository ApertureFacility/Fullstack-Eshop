import axios from 'axios';

const API_URL = 'http://localhost:7000/api';



export const getallItemsReq = async () => {
  const response = await axios.get(`${API_URL}/item`); 
  console.log('API URL:', process.env.REACT_APP_API_URL);
  return response.data;
};