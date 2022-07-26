import './App.css';
import React, { useState } from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() {
  const [animals, setAnimals] = useState(animalData)

  const handleSortByLife = () => {
    const sortedLife = [...animals].sort((a, b) => a.lifeExpectancy - b.lifeExpectancy)
    setAnimals(sortedLife)
  }

  const handleFilterDog = () => {
    const onlyDogs = animals.filter(el => el.type === 'dog')
    setAnimals(onlyDogs)
  }
  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <button onClick={handleSortByLife} className='action-btn'> sort by life expentancy</button>
      <button onClick={handleFilterDog} className='action-btn'> filter dogs</button>
      {animals.map(el => {
        return <Card key={el._id} animal={el} />
      })}


    </div>
  );
}

export default App;
