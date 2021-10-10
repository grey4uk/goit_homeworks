import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import Button from './components/Button/Button';
import {
  addItem,
  deleteItem,
  fetchItems,
} from './redux/actions';
import { fieldsSelector } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) =>
    fieldsSelector(state)
  );
  const { field } = useSelector((state) => state.fetch);

  const increment = () => dispatch(addItem());
  const decrement = () => dispatch(deleteItem());

  async function getPokemons() {
    try {
      const result = await axios.get(
        'https://pokeapi.co/api/v2/item/'
      );
      dispatch(
        fetchItems(result.data.results.slice(0, 19))
      );
    } catch (error) {
      console.log(`error`, error);
    }
  }

  useEffect(() => {
    getPokemons();
  });

  return (
    <>
      <h1>COUNTER</h1>
      <div
        style={{
          width: '20vw',
          display: 'flex',
          justifyContent: 'space-around',
          background: 'grey',
          padding: '2%',
          marginBottom: '2%',
        }}>
        <Button title='INCREMENT' onClick={increment} />
        <Button title='DECREMENT' onClick={decrement} />
      </div>
      <div
        style={{
          width: '20vw',
          display: 'flex',
          justifyContent: 'space-around',
          background: 'grey',
          padding: '2%',
          color: '#fff',
          fontSize: '10vh',
        }}>
        <span>{counter}</span>
      </div>
      <div>
        <h2>POKEMONS</h2>
        <ul>
          {field.map((el) => (
            <li key={el.name}>
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
