import React from 'react';

export default function Auction() {
    const animal_one = {"type":"Monke", "price":"$39", "photo_url":"./sample_photo.jpg"};
    const animal_two = {"type":"Horse", "price":"$39", "photo_url":"./sample_photo.jpg"};
    const animal_three = {"type":"Sheep", "price":"$39", "photo_url":"./sample_photo.jpg"};
    const animal_list = [animal_one, animal_two, animal_three];


    function animals(animal) {
        return(
            <div>
                <p> {animal.photo_url}</p>
                <p><b> {animal.type} </b></p>
                <p> {animal.price}</p>
                <p> Bid now! </p>
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