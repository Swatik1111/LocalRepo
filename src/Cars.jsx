
import React, { useState } from 'react'
import './App.css'

function Cars() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState("");
    const [carMake, setCarMake] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };

        setCars(c => [...c, newCar]);
    }
    function handleRemoveCar(index) {
        setCars(c => (c.filter((_, i) => i !== index)));
    }


    function handleYearChange(event) {
        setCarYear(event.target.value)
    }
    function handleModelChange(event) { setCarModel(event.target.value) }
    function handleMakeChange(event) { setCarMake(event.target.value) }

    return (<div className="cars-container">
        <h2>List Of Latest Cars</h2>

        <ul>
            {cars.map((car, index) =>
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year}{car.model}{car.make}
                </li>)}
        </ul>
        <input type="number" onChange={handleYearChange} value={carYear}></input> <br></br>
        <input type="text" onChange={handleModelChange} value={carModel}></input> <br></br>
        <input type="text" onChange={handleMakeChange} value={carMake}></input> <br></br>

        <button onClick={handleAddCar}>Add Car</button>

    </div>);
}
export default Cars