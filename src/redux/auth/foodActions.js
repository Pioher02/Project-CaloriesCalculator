// redux/auth/foodActions.js
import { setFoods } from './foodReducer';
import { baseURL } from 'helpers/constants';

import axios from 'axios';
// Acción para cargar alimentos según el tipo de sangre usado
export const loadFoodsByBloodType = (userBloodType) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseURL}/not-allowed-foods/${userBloodType}`);
        const foods = response.data;

        // Despacha una acción para actualizar el estado con los alimentos
        return dispatch(setFoods(foods)); // Utiliza la acción setFoods para actualizar el estado
    } catch (error) {
        console.error('Error al cargar alimentos:', error);
        dispatch({
            type: 'LOAD_FOODS_ERROR',
            payload: error.message,
        });
    }
};