import React from 'react';
import Header from './components/Header/Header';
import FoodList from './components/FoodLidst/FoodList'; // Importing FoodList component
 

import './App.css'; // Optional: global styles

function App() {
  return (
    <div className="all-container">
      <Header />
      <FoodList />
    </div>
  );
}

export default App;