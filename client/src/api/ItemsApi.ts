import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;



export const getallItemsReq = async () => {
  const response = await axios.get(`${API_URL}/item`); 
  return response.data;
};

export const getOneItemReq = async (id: string) => {
  const response = await axios.get(`${API_URL}/item/${id}`);
  return response.data;
};