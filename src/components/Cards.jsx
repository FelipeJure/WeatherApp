import React from 'react';
import Card from './Card';
import s from './Cards.module.css';

export default function Cards({cities, onClose}) {

  document.querySelector('body').style.backgroundImage = "url('https://images.unsplash.com/photo-1566995589099-45de344a6dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=955&q=80')"

  if (cities){
    return (
      <div className={s.cards}>
      {
        cities.map (c => { return (< Card 
          id={c.id}
          key= {c.id}
          name={c.name}
          country={c.country}
          img={c.img}
          temp={c.temp}
          lat={c.lat}
          lon={c.lon}
          onClose={onClose}
        />)})
      }
      </div>)
  } 
  else {
    return(
      <div>
        <h1>Sin ciudades</h1>
      </div>
    )
  }
}
