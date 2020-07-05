import React from 'react';
import { boilerPlateData } from "./data.js";
import './App.css';

export default () => {
  const generateCardsFromData = collection => {
    return collection.map(item => {
      return (
        <div className="card">
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h4>Strength: {item.strength}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="main">
      {generateCardsFromData(boilerPlateData)}
    </div>
    );
};