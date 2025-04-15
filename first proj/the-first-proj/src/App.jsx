import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from "react";
function getTitle(title) {
 return title;
}

const App =() =>{
  return(<>
    <h1>My Hacker Stories</h1>
    <Search />
    <hr />
    <List />
    
  </>);
};
const Search =() =>{
  const handleChange=(event) =>{
    console.log(event);
    console.log(event.target.value);  };
  return(
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onchange={handleChange}/>
    </div>
    );
};
const List =() =>{
  return(<ul>
    {list.map(function (item) {
    return (
    <li key={item.objectID}>
    <span>
    <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    </li>
    );
    })}
    </ul>)
};


export default App
