import React, {useRef, useState} from 'react';

export default function Bid(props) {
    const bidRef = useRef(null);
    const [highestBid, setHighestBid] = useState(0);

    function onClickBid(bid) {
        if (bid < highestBid) {
            alert("Bid must be higher than current bid!");
            return;
        }
        setHighestBid(bid);
        alert("Bid placed, thank you!");
        alert(highestBid);
    }

    return (
        <div>
           {/* Animal should be an object grabbed from Flask - should update when a bid is placed*/}
           <p>{props.animal.photo_url}</p>
            <p>{props.animal.type}</p>
            <p> Time Left: {props.animal.time}</p>
            <p> Current Bid: {props.animal.price}</p>

            <input ref={bidRef} type="text"/>
            <button type="button" onClick={() => onClickBid(bidRef.current.value)}>
                Bid!
            </button>
        </div>
    );
}