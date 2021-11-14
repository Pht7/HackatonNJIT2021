import React, {useRef, useState} from 'react';
import { doc, updateDoc } from "firebase/firestore";

import { getDatabase, ref, onValue, set, push, child, update} from "firebase/database";
import './Auction.css'
import { database } from "firebase-admin";

// function updateData(uuid, bid){
//     const db = getDatabase();
//     // Try getting this to work, if it doesn't use a local array to store.
//     // https://firebase.google.com/docs/database/web/read-and-write
//     const newUpdate = ref(db,'/testData' + uuid + "/" + "bid/").update({
//             bid: bid
//         }
//     ) .then(r => console.log("Updated"));
//         onValue(newUpdate, (snapshot) => {
//         const data = snapshot.val();
//     });
// }

export default function Bid(props) {
    const bidRef = useRef(null);
    const [highestBid, setHighestBid] = useState(props.animal.bid);
    //const getValueBid = getData();

    function updateData(bid) {
        const db = getDatabase();
        const uid = props.animal.name;

        // A bid entry
        const postData = {
            "bid": bid,
            "desc": props.animal.desc,
            "name": props.animal.name,
            "photoLocation": props.animal.photoLocation,
            "species": props.animal.species,
            "time": props.animal.time
        };

        // Get a key for a new Post.
        const newPostKey = push(child(ref(db), 'posts')).key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['/testData/' + uid] = postData;

        return update(ref(db), updates);
}

    function onClickBid(bid) {
        if (bid < highestBid) {
            alert("Bid must be higher than current bid!");
            return;
        }
        setHighestBid(bid);
        let promise = updateData(bid);
        alert("Bid placed, thank you!");
    }

    return (
        <div>
           {/* Animal should be an object grabbed from Flask - should update when a bid is placed*/}
            <div className="textAuction">
           <img src={props.animal.photoLocation} height="200px" width="200px" border="1px"/>
            <p>{props.animal.name}</p>
            <p>{props.animal.species}</p>
            <p> Time Left: {props.animal.time}</p>
            <p> Current Bid: {highestBid} </p>
        </div>

            <input ref={bidRef} type="text"/>
            <button type="button" onClick={() => onClickBid(bidRef.current.value)}>
                Bid!
            </button>
            <a href="./animals"> <button> Go Back </button></a>
        </div>
    );
}
