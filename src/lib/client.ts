import axios from 'axios';

export const clientTG = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RESTAURANT_API,
});
export default clientTG;
