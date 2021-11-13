import React, { useState } from 'react';
import Bid from "./Bid";

    var admin = require("firebase-admin");

    var serviceAccount = require("../hacknjit2021-firebase-adminsdk-dcz1m-53e3a25ff7.json");

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://hacknjit2021-default-rtdb.firebaseio.com"
    });

export default function Auction() {
    const animal_one = {"type":"Monke", "price":"$39", "photo_url":"./sample_photo.jpg"};
    const animal_two = {"type":"Horse", "price":"$39", "photo_url":"./sample_photo.jpg"};
    const animal_three = {"type":"Sheep", "price":"$39", "photo_url":"./sample_photo.jpg"};
    const animal_list = [animal_one, animal_two, animal_three];
    const [bid, setBid] = useState(false);
    const [animalObject, setAnimalObject] = useState({});


    function animals(animal) {
        return(
            <div>
                <p> {animal.photo_url}</p>
                <p><b> {animal.type} </b></p>
                <p> {animal.price}</p>
                <button type="button" onClick={() => {
                    setBid(true);
                    setAnimalObject(animal);
                }}>
                    Bid now!
                </button>
            </div>
        )
    }
    return (
        <div>
            <h1> Meet the animals! </h1>
            {bid === false ? (
                <div>
                    {animal_list.map((animal) => {
                        return animals(animal)
                    })}
                </div>
            ) : (
                <Bid animal={animalObject}/>
            )}
        </div>
        // <div>
        //     <h1> Meet the animals! </h1>
        //     <div className='container'>
        //         {animal_list.map((animal) => {
        //             return animals(animal)
        //         })}
        //     </div>
        // </div>
  );
}
