import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import fakeData from './fakeData/fakeData.json';
import Player from './Component/Player/Player';
import Cart from './Component/Cart/Cart';
import Me from './Component/me/Me';

function App() {
  const [players, setPlayers] = useState([]);

  const [addPlayer,getAddPlayer] = useState([]);

  const handleAddPlayer = (players) => {
    const newAddPlayer = [...addPlayer, players];
    getAddPlayer(newAddPlayer);

  }

    useEffect(() => {
      setPlayers(fakeData)
    })

  return (
    <div className="main-container">
           <h1 className='App'>World Top {players.length} Football Player</h1>
     <div className="playerCart">
        <div className="cartDetails">
        <Cart addPlayer={addPlayer}></Cart>
        </div>
        <div className="singlePlayer">
              {
                players.map(player => <Player players={player} handleAddPlayer={handleAddPlayer} key={player.name}></Player>)
              }
             
        </div>
     </div>
     <div className='Apps'><Me></Me></div>
    </div>
    
  );
}

export default App;
