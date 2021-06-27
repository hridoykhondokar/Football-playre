import React, { useState } from 'react';
import "./Player.css";

const Player = (props) => {
    const {name, photo, number, email, club, salary} = props.players;
    const handleAddPlayer = props.handleAddPlayer;
    const [isClicked, setIsClicked] = useState(false);
   

    return (
        <div className="singlePlayer">
           <div className="player">
            <img src={photo} alt="" />
            <h2> Name : <b className="playerName">{name}</b> </h2>
            <p>Club : {club}</p>
            <p>Salary : $ {salary}</p>
            <p>Phone : {number}</p>
            <p>Email : {email}</p>
            <button disabled={isClicked} onClick={()=>{handleAddPlayer(props.players)
            setIsClicked(true)
            }}>{isClicked ? ' Buying' : ' Buy Now'}</button>
            
           </div>
        </div>
    );
};

export default Player;