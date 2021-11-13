import React from 'react';
import {getDatabase} from "firebase-admin/lib/database";
import {getFirestore} from "firebase-admin/lib/firestore";

    var admin = require("firebase-admin");

    var serviceAccount = require("../hacknjit2021-firebase-adminsdk-dcz1m-53e3a25ff7.json");

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://hacknjit2021-default-rtdb.firebaseio.com"
    });
    const db = getFirestore();
    const cityRef = db.collection('cities').doc('BJ');
    console.log(cityRef);
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
