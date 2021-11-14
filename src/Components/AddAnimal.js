import React, { useState, useRef } from 'react';
import Bid from "./Bid";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, set} from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { description } from 'commander';
import './AddAnimal.css';
import Animals from '../App.js';


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

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function AddAnimal() {
    const nameRef = useRef(null);
    const speciesRef = useRef(null);
    const weightRef = useRef(null);
    const descriptionRef = useRef(null);
    const pictureRef = useRef(null);
        //html
    return (
        <>
        <button className="open-button" onClick={() => {
            openForm();
            }}><b>Add Here</b></button>
        <div className="form-popup" id="myForm">
            <form className="form-container">

        <label for="name"><b>Name:</b></label>
        <input type="text" id="name" name="name" ref={nameRef}></input>

        <label for="species"><b>Species:</b></label>
        <input type="text" id="species" name="species" ref={speciesRef}></input>

        <label for="weight"><b>Weight:</b></label>
        <input type="text" id="weight" name="weight" ref={weightRef}></input>

        <label for="description"><b>Description:</b></label>
        <input type="text" id="description" name="description" ref={descriptionRef}></input>

        <label for="picture"><b>Picture:</b></label>
        <input type="url" id="picture" name="picture" placeholder="Link:" ref={pictureRef}></input>

        <button type="button" className="button-submit" onClick={() => {
            writeData("0",descriptionRef.current.value, nameRef.current.value, pictureRef.current.value, speciesRef.current.value,24,nameRef.current.value);
            <Animals />
            closeForm();
        }}><b>Submit</b></button>
        <button type="button" className="button-cancel" onClick={() => {
            closeForm();
        }}><b>Close</b></button>
        </form>
        </div>

        </>
    );
}

export default AddAnimal;
