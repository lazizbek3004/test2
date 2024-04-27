import React, { useState } from "react";

function Cars(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carModel, setCarModel] = useState("")
    const [carMake, setCarMake] = useState("")

    function handleCarYear(event){
        setCarYear(event.target.value)
    }
    function handleCarModel(event){
        setCarModel(event.target.value)
    }
    function handleCarMake(event){
        setCarMake(event.target.value)
    }
    function addNewCar(){
        const newCar = {
            year: carYear,
            make: carMake, 
            model: carModel
        }
        setCars(c => [...c, newCar])
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }
    function handleRemove(index){
        setCars(c => c.filter((_, i) => i !== index))
    }

    return(<>
        <input type="number" value={carYear} onChange={handleCarYear} /><br />
        <input type="text" value={carModel} onChange={handleCarModel} /><br />
        <input type="text" value={carMake}  onChange={handleCarMake} /><br />
        <button onClick={addNewCar}>Add a car</button>
        <ul>
            {cars.map((el, index) => <li key={index} onClick={() => handleRemove(index)}>{el.year} {el.make} {el.model}</li>)}
        </ul>
    </>);
}

export default Cars