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

function getDonation(){
    let uuidList = getData();
    const db = getDatabase();
    let temp = ""
    let animalList = [];
    for (let i =0; i < uuidList.length; i++){
        let dbRef = ref(db, 'testData/'+ uuidList[i]);
        onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
       // console.log(data);
        temp = data;
        animalList.push(temp.donation);
    });
    }
    return animalList;


}

function getAnimal(){
    let uuidList = getData();
    const db = getDatabase();
    let temp = ""
    let animalList = [];
    for (let i =0; i < uuidList.length; i++){
        let dbRef = ref(db, 'testData/'+ uuidList[i]);
        onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
       // console.log(data);
        temp = data;
        animalList.push(temp.species);
    });
        console.log(animalList);
    }
        return animalList;

}
function getWeight(){
    let uuidList = getData();
    const db = getDatabase();
    let temp = ""
    let animalList = [];
    for (let i =0; i < uuidList.length; i++){
        let dbRef = ref(db, 'testData/'+ uuidList[i]);
        onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
       // console.log(data);
        temp = data;
        animalList.push(temp.weight);
    });
        console.log(animalList);
    }
        return animalList;
}
function getName(){
    let uuidList = getData();
    const db = getDatabase();
    let temp = ""
    let animalList = [];
    for (let i =0; i < uuidList.length; i++){
        let dbRef = ref(db, 'testData/'+ uuidList[i]);
        onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
       // console.log(data);
        temp = data;
        animalList.push(temp.name);
    });
        console.log(animalList);
    }
        return animalList;

}


function getAllData(){
    const db = getDatabase();
    let uuidList = [];
    const dbRef = ref(db, 'testData/' );
        onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        uuidList.push(data);
    });
   // console.log(uuidList);


}



function writeData(bid, desc, name, photoLocation, species, time, UUID){
    const db = getDatabase();
    console.log("Ping");
    set(ref(db, 'testData/' + UUID), {
        bid: bid,
        desc: desc,
        name: name,
        photoLocation : photoLocation,
        species: species,
        time: time
    });

}

function Auction() {
    const [bid, setBid] = useState(false);
    const [animalObject, setAnimalObject] = useState({});
    //const animal_list = [animal_one, animal_two, animal_three];
    const animal_list = getData();
    writeData(75,"Rat Trap Music", "Nemo","pornhub.com","Clownfish",40,"BIGFATTYRATTY")
    function animals(animal) {
        return(
            <div>
                <p> {animal.photoLocation}</p>
                <p> {animal.name} </p>
                <p> {animal.species} </p>
                <p> Current Owner: {animal.desc} </p>
                <p> Time Left: {animal.time} </p>
                <p> Bid: {animal.bid} </p>

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

export default Auction;
