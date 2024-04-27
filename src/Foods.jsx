import React, { useState } from "react";

function Foods(){
    const [foods, setFoods] = useState(["banana", "apple", "mango"])
    
    function addFood(){
        const newFood = document.getElementById("newFood").value;
        document.getElementById("newFood").value = ''
        setFoods(f => [...f, newFood])
    }
    function removeFood(index){
        
        setFoods(foods.filter((_, i) => i !== index))
    }

    return(<>
        <input type="text" placeholder="Add new food" id="newFood" />
        <button onClick={addFood}>Add</button>

        <h1>List of foods:</h1>
        <ul>
            {foods.map((el, index) => <li  key={index} onClick={() => removeFood(index)}>{el}</li>)}
        </ul>

      
    </>);
}

export default Foods