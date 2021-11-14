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
    return uuidList;
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
    console.log(uuidList);


}

function writeData(name, species, donation, weight, UUID){
    /*
    console.log(name);
    console.log(species);
    console.log(donation);
    console.log(weight);
    console.log(UUID);*/
    const db = getDatabase();
    console.log("Ping");
    set(ref(db, 'testData/' + UUID), {
        name: name,
        species: species,
        donation: donation,
        weight: weight
    });

}

function buttonClicked(){
    //console.log(document.getElementById("nameField").innerHTML);
    //writeData(document.getElementById('nameField'),document.getElementById('speciesField'),document.getElementById('donationField'),document.getElementById('weightField'),document.getElementById('uuidField'));
}

export default function Auction() {
    console.log("-----")
    console.log(getDonation());

    console.log(getAnimal());
    console.log(getWeight());
    console.log(getName());
    console.log("-----")
    getDonation();
    //console.log(getAnimal());
    buttonClicked();
    //console.log("begin Test")
    writeData("joe","cow","100","50LB", "test6");
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

    const [input, setInput] = useState(''); // '' is the initial state value
    function animals(animal) {
        return(
            <div>
                <p> {animal.photo_url} </p>
                <h2> {animal.type} </h2>
                <p> Current Owner: {animal.current_owner} </p>
                <p> Time Left: {animal.time_left} </p>
                <p> Current Bid: ${animal.price} </p>

                <button type="button" onClick={() => {
                    setBid(true);
                    setAnimalObject(animal);
                }}>
                    Bid now!
                </button>
            </div>
        )
    }
    let textInput = React.createRef()
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
