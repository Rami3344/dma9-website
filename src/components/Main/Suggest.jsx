import React from 'react'
import '../../style/Main.css'
import suggested from './SuggestData';
function Suggest() {
    return (
    <div className='suggest'>
      <h1>Suggested Food</h1>
      <ul>
        {suggested.map((food)=> <li key={food.id}>
            <h2>{food.name}</h2>
            <img src={food.src}/><br/>
            <button>Search for available restaurants</button>
            </li>)}
      </ul>
    </div>
  )
}
export default Suggest
