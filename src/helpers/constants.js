import moment from 'moment';

export const initialDate = moment(new Date()).format('DD-MM-YYYY');

export const bloodTypes = [1, 2, 3, 4]; //usado

export const baseURL = "http://localhost:3001/api"
//https://backend-calories-calculator.vercel.app  


export const routes = {
  main: '/',
  calculate: '/calculate',
  diary: '/diary',
  signup: '/signup',
  login: '/login',
};
