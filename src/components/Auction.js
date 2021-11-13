import React, { useState } from 'react';
import Bid from "./Bid";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, onValue} from "firebase/database";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function getData(){
    const db = getDatabase();
    const testDummy = ref(db, 'testData/'+'/animal'+'/name');
    let final = "";
    onValue(testDummy, (snapshot) => {
        const data = snapshot.val();
        final = data;
    });
    return final;
}


export default function Auction() {
    const animal_one = {"type":getData(), "price":"$39", "photo_url":"./sample_photo.jpg"};
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
