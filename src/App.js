import React, { useState } from 'react';
import './App.css'
import axios from "axios";

const App = () => {
  const [result,setResult] = useState("")
  const [formData, setFormData] = useState({
    age: '',
    blood_pressure: '',
    specific_gravity: '',
    albumin: '',
    sugar: '',
    red_blood_cells: '',
    pus_cell: '',
    pus_cell_clumps: '',
    bacteria: '',
    blood_glucose_random: '',
    blood_urea: '',
    serum_creatinine: '',
    sodium: '',
    potassium: '',
    haemoglobin: '',
    packed_cell_volume: '',
    white_blood_cell_count: '',
    red_blood_cell_count: '',
    hypertension: '',
    diabetes_mellitus: '',
    coronary_artery_disease: '',
    appetite: '',
    peda_edema: '',
    aanemia: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://kidneydiseasepredictor2.onrender.com/',formData)
    .then((response) => {
      // Handle the API response
      console.log(response.data);

      const predictionValue = parseInt(response.data.prediction, 10); // Convert to an integer
      setResult(predictionValue === 0 ? "You are Safe still take medical consultation!" : "You Might Be Suffering from Chronic Kidney Disease please consult your Doctor");
      console.log(result);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
  };

  return (
    <div>
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="form-label">
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Blood Pressure:
        <input
          type="text"
          name="blood_pressure"
          value={formData.blood_pressure}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Specific Gravity:
        <input
          type="text"
          name="specific_gravity"
          value={formData.specific_gravity}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Albumin:
        <input
          type="text"
          name="albumin"
          value={formData.albumin}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Sugar:
        <input
          type="text"
          name="sugar"
          value={formData.sugar}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Red Blood Cells:
        <input
          type="text"
          name="red_blood_cells"
          value={formData.red_blood_cells}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Pus Cell:
        <input
          type="text"
          name="pus_cell"
          value={formData.pus_cell}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Pus Cell Clumps:
        <input
          type="text"
          name="pus_cell_clumps"
          value={formData.pus_cell_clumps}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Bacteria:
        <input
          type="text"
          name="bacteria"
          value={formData.bacteria}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Blood Glucose Random:
        <input
          type="text"
          name="blood_glucose_random"
          value={formData.blood_glucose_random}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Blood Urea:
        <input
          type="text"
          name="blood_urea"
          value={formData.blood_urea}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Serum Creatinine:
        <input
          type="text"
          name="serum_creatinine"
          value={formData.serum_creatinine}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Sodium:
        <input
          type="text"
          name="sodium"
          value={formData.sodium}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Potassium:
        <input
          type="text"
          name="potassium"
          value={formData.potassium}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Haemoglobin:
        <input
          type="text"
          name="haemoglobin"
          value={formData.haemoglobin}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Packed Cell Volume:
        <input
          type="text"
          name="packed_cell_volume"
          value={formData.packed_cell_volume}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        White Blood Cell Count:
        <input
          type="text"
          name="white_blood_cell_count"
          value={formData.white_blood_cell_count}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Red Blood Cell Count:
        <input
          type="text"
          name="red_blood_cell_count"
          value={formData.red_blood_cell_count}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Hypertension:
        <input
          type="text"
          name="hypertension"
          value={formData.hypertension}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Diabetes Mellitus:
        <input
          type="text"
          name="diabetes_mellitus"
          value={formData.diabetes_mellitus}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Coronary Artery Disease:
        <input
          type="text"
          name="coronary_artery_disease"
          value={formData.coronary_artery_disease}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Appetite:
        <input
          type="text"
          name="appetite"
          value={formData.appetite}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Peda Edema:
        <input
          type="text"
          name="peda_edema"
          value={formData.peda_edema}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Aanemia:
        <input
          type="text"
          name="aanemia"
          value={formData.aanemia}
          onChange={handleChange}
        />
      </label>
    </form>
    <div className="form-submit-container">
      <button className="form-submit" type="submit" onClick={handleSubmit}>
        Click To Get Result
      </button>
    </div>
    <h1 className="form-submit-container">{result}</h1>
    </div>
  );
};

export default App;
