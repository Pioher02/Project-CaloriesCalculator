import React, { useState } from 'react';
import axios from 'axios';
import CustomModal from './Modal'; // Importa el componente Modal
import Loader from './Loader';
import { FormWrapper, Form } from '../styles/CalculatorFormStyles';

// Define la función calculateCalories fuera del componente CalculatorForm
const calculateCalories = (formData) => {
    const { age, currentWeight, height, targetWeight } = formData;

    // Verificar si los valores son números válidos
    if (isNaN(age) || isNaN(currentWeight) || isNaN(height) || isNaN(targetWeight)) {
        console.error('Los valores proporcionados no son válidos');
        return null;
    }

    // Fórmula para calcular las calorías según la información proporcionada
    const calculatedCalories =
        10 * currentWeight +
        6.25 * height -
        5 * age -
        161 -
        10 * (currentWeight - targetWeight);

    return Math.round(calculatedCalories); // Redondea el resultado
};

const CalculatorForm = () => {
    const [formData, setFormData] = useState({
        height: '',
        age: '',
        currentWeight: '',
        targetWeight: '',
        bloodGroup: '',
    });

    const [calories, setCalories] = useState(null);
    const [foodRecommendations, setFoodRecommendations] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const calculatedCalories = calculateCalories(formData);

        if (calculatedCalories !== null) {
            try {
                console.log("Solicitud enviada con datos:", formData);
                const response = await axios.post('http://localhost:3001/api/calories/calculate', formData);
                console.log("Respuesta del servidor:", response.data);
                if (response.data.calories !== undefined) {
                    setCalories(response.data.calories);
                }

                if (response.data.recommendations !== undefined) {
                    setFoodRecommendations(response.data.recommendations);
                }

                setModalIsOpen(true);

                console.log("Modal abierto");
            } catch (error) {
                console.error('Error al obtener las recomendaciones de alimentos', error);

            } finally {
                setIsLoading(false);
            }
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCalories(null);
        setFoodRecommendations([]);
    };

    return (
        <FormWrapper>
            <h2>Calculate your daily calorie intake right now</h2>
            <Form onSubmit={handleSubmit}>
                <div className="column"> {/* Primera columna */}
                    <input
                        type="text"
                        name="height"
                        placeholder="Altura (cm)"
                        value={formData.height}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Edad"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="currentWeight"
                        placeholder="Peso actual (kg)"
                        value={formData.currentWeight}
                        onChange={handleChange}
                    />
                </div>
                <div className="column"> {/* Segunda columna */}
                    <input
                        type="number"
                        name="targetWeight"
                        placeholder="Peso ideal (kg)"
                        value={formData.targetWeight}
                        onChange={handleChange}
                    />
                    <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona grupo sanguíneo</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                    </select>
                </div>
                <button type="submit">Calcular Calorías</button>
            </Form>
            {isLoading && <Loader />}
            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                calories={calories !== null ? calories : 0}
                foodRecommendations={foodRecommendations}
            />
        </FormWrapper>

    );
};

export default CalculatorForm;

