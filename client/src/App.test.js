import React from 'react';
import ReactDOM from 'react-dom';
import App, {} from './App';
import {render} from '@testing-library/react';
import PlayerCard from './components/PlayerCard'
import Navbar from './components/NavBar'
import PlayerData from './components/PlayerData'


test('renders without crashing', () => {
 render(<App />,);
});


test('check for text of h1 element', () =>{
  const { getByText } = render(<App />);
  getByText(/soccer players/i)
})

test('check for text of button on navbar', () =>{
  const { getByText } = render(<Navbar />);
  getByText(/theme/i)
})

test('check for text of h1 element', () =>{
  const { getByText } = render(<Navbar />);
  getByText(/Players/i)
})


