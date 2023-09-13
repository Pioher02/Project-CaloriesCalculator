import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import DiaryPage from '../pages/Diary';




export const App = () => {
  return <Routes>
  <Route path="/Project-CaloriesCalculator/" element={<Layout />}></Route>
  <Route path="/Project-CaloriesCalculator/diario" element={<DiaryPage />}></Route>
  </Routes>;
};
