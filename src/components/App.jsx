import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa 'Routes' y 'Route' desde 'react-router-dom'
import CalculatorForm from '../components/CalculatorForm';
import CustomModal from '../components/Modal';
import Registro from '../components/Register'; // Importa el componente de registro (ajusta la importación según tu estructura de archivos)

function App() {
    const [calories, setCalories] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleCaloriesCalculated = (calculatedCalories) => {
        setCalories(calculatedCalories);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <Router>
            <div className="app">
                <CalculatorForm onCaloriesCalculated={handleCaloriesCalculated} />
                <CustomModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    calories={calories}
                />
            </div>
            <Routes>
                <Route path="/registro" element={<Registro />} />
            </Routes>
        </Router>
    );
}


export default App;


