import React from 'react';

export default function Auction() {
    const animal_one = {"type":"Pig", "price":"$39", "photo":"./sample_photo.jpg"};
    const animal_two = {"type":"Horse", "price":"$39", "photo":"./sample_photo.jpg"};
    const animal_three = {"type":"Sheep", "price":"$39", "photo":"./sample_photo.jpg"};
    const animal_list = [animal_one, animal_two, animal_three];


    function animals(animal) {
        return(
            <div>
                <p><b> {animal.type} </b></p>
                <p> Buy now! </p>
            </div>
        )
    }
    return (
        <body>
            <h1> Meet the animals! </h1>
            <div className='container'>
                {animal_list.map((animal) => {
                    return animals(animal)
                })}
            </div>
        </body>
  );
}