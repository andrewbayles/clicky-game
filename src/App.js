import React from 'react';
import Card from './components/card.js';
import Navbar from './components/navbar.js';
import './App.css';


const gameCards = [
  {
    id: 1,
    image: "castlevania.jpg",
    clicked: false
  },
  {
    id: 2,
    image: "dragon_warrior.jpg",
    clicked: false
  },
  {
    id: 3,
    image: "duck_tales.jpg",
    clicked: false
  },
  {
    id: 4,
    image: "excitebike.jpg",
    clicked: false
  },
  {
    id: 5,
    image: "final_fantasy.jpg",
    clicked: false
  },
  {
    id: 6,
    image: "kid_icarus.jpg",
    clicked: false
  },
  {
    id: 7,
    image: "little_nemo.jpg",
    clicked: false
  },
  {
    id: 8,
    image: "metroid.jpg",
    clicked: false
  },
  {
    id: 9,
    image: "ninja_gaiden_2.jpg",
    clicked: false
  },
  {
    id: 10,
    image: "rampage.jpg",
    clicked: false
  },
  {
    id: 11,
    image: "super_mario.jpg",
    clicked: false
  },
  {
    id: 12,
    image: "turtles_2.jpg",
    clicked: false
  }
];


function App() {
  return (
    <div className="App">
      
      <Navbar />

        <div>
          <h3>Games List</h3>
          {this.state.gameCards.map(card => (
            <Card
              id={card.id}
              key={card.image}
              clicked={card.clicked}
            />
          ))}
        </div>

      <footer>
        <p>Clicky Game</p>
      </footer>

    </div>
  );
}

export default App;
