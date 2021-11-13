import React from 'react';

function AddAnimal() {
//js
    return (
        //html
        <>
        <label for="species">Species:</label>
        <input type="text" id="species" name="species"></input>
        <label for="weight">Weight:</label>
        <input type="text" id="weight" name="weight"></input>
        <label for="description">Description:</label>
        <input type="text" id="description" name="description"></input>
        <label for="picture">Picture:</label>
        <input type="file" id="picture" name="picture"></input>
        <button type="button" onClick={() => {
            
        }}> Submit</button>

        </>
    );
}

export default AddAnimal;