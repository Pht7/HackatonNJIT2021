import React from 'react';

export default function Bid(props) {
    return (
        <div>
           <p>{props.animal.photo_url}</p>
            <p>{props.animal.type}</p>
            <p>{props.animal.price}</p>

            <input type"text"/>
            <button type="button">
                Bid!
            </button>
        </div>
    );
}