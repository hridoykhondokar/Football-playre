import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props)
    const added =  props.addPlayer;

    //   let totalCost = 0;
    //   for (let i = 0; i < added.salary.length; i++) {
    //       const cost = added.salary[i];
    //       totalCost = cost + totalCost;
        
    //   }

      const totalPlayerCost = added.reduce((totalPlayerCost, cost) => totalPlayerCost + cost.salary, 0);

    return (
        <div className="details">
           <h2> Buy Player: {added.length}</h2>
            <h3>Total Cost : $ {totalPlayerCost}</h3>
            <div className="playerDetails">
                {
                    added.map((player) => <li className="playerBuy" type="1">Name- {player.name};&nbsp;Salary- ${player.salary};&nbsp;Club- {player.club}</li>)
                } 
            </div>
        </div>
    );
};

export default Cart;