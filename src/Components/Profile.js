import React from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set} from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import './Auction.css'
import Login from './Login.js';

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
    const dbRef = ref(db, 'testData/');
    let temp = ""
    let uuidList = []
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        temp = data;
    });
    for (const test in temp){
        uuidList.push(test);
    };
    console.log("UUU");
    console.log(Object.values(temp));
    console.log("UUU")
    return Object.values(temp);
}

function Profile(profileObj) {
    const animal_list = getData();
    let name = localStorage.getItem('name');
    let price = localStorage.getItem('price');
    let helped = localStorage.getItem('helped');
        function animals(animal) {
        return(
            <body>
            <div className="animalPost">
                    <div className="imageCSS">
                   <img src={animal.photoLocation} height="200px" width="200px" border="1px"/>
                    </div>
                    <div className="textAuction">
                    <p>{animal.name}</p>
                    <p>{animal.species}</p>
                    <p>Current Owner: {animal.desc}</p>
                    <p>Time Left: {animal.time} hours </p>
                    <p> Bid: ${animal.bid} </p>
                    </div>
            </div>
            </body>
        )
    }
    return (
        <>
        <div class="top-of-page">
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h2>{helped}</h2>
        </div>
        <div class="list-of-animals">
            {animal_list.map((animal) => {
                return animals(animal)
            })}
        </div>
        </>
    );
}

export default Profile;
