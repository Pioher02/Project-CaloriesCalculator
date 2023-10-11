import moment from 'moment';

export const initialDate = moment(new Date()).format('DD-MM-YYYY');

export const bloodTypes = [1, 2, 3, 4]; //usado

export const baseURL = "https://backend-calories-calculator.vercel.app"
// http://localhost:3001/api local funciona en dev 


export const routes = {
  main: '/',
  calculate: '/calculate',
  diary: '/diary',
  signup: '/signup',
  login: '/login',
};
