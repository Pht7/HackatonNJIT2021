import React from 'react';

export default function Auction() {
    const animal_list = ['Pig', 'Sheep', 'Cow'];

    function animals(animal) {
        return(
            <div>
                <p><b> {animal} </b></p>
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