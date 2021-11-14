import React, { useState } from 'react';
import Bid from "./Bid";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, set} from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBomGokWVsUMjO3UZ3f8Fw9m8dXuEXuG78",
  authDomain: "hacknjit2021.firebaseapp.com",
  databaseURL: "https://hacknjit2021-default-rtdb.firebaseio.com",
  projectId: "hacknjit2021",
  storageBucket: "hacknjit2021.appspot.com",
  messagingSenderId: "259200783381",
  appId: "1:259200783381:web:d9c7d05e8e7a4bad312a1c",
  measurementId: "G-Y65KXHR484"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// Sample get function
function getData(){
    const db = getDatabase();
    const dbRef = ref(db, 'testData/'+'animal/'+'name/');
    let finalValue = ""
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        finalValue = data;
    });
    return finalValue;
}

function writeData(name, species, donation, weight, UUID){
    const db = getDatabase();
    set(ref(db, 'testData/' + UUID), {
        name: name,
        species: species,
        donation: donation,
        weight: weight
    });
}

export default function Auction() {
    //sample data
    //getData();
    console.log("begin Test")
    writeData("joe","cow","100","50LB", "test3");
    const animal_one = {
        "type":"Monke",
        "price":"$39",
        "photo_url":"./sample_photo.jpg",
        "current_owner":"iDonated",
        "time_left": "21h"
    };
    const animal_two = {
        "type":"Horse",
        "price":"$39",
        "photo_url":"./sample_photo.jpg",
        "current_owner":"Joe",
        "time_left":"9h"
    };
    const animal_three = {
        "type":"Sheep",
        "price":"$39",
        "photo_url":"./sample_photo.jpg",
        "current_owner":"Bill",
        "time_left":"12h"
    };
    const animal_list = [animal_one, animal_two, animal_three];


    const [bid, setBid] = useState(false);
    const [animalObject, setAnimalObject] = useState({});


    function animals(animal) {
        return(
            <div>
                <p> {animal.photo_url} </p>
                <h3> {animal.type} </h3>
                <p> Current Owner: {animal.current_owner} </p>
                <p> Time Left: {animal.time_left} </p>
                <p> Current Bid: {animal.price} </p>

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
  );
}
