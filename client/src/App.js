import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import PlayerData from './components/PlayerData'
class App extends React.Component {

  constructor() {
    super();
    this.state={
      player: []
    }
  }



  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players' )
     .then(res => {
      //  console.log(res.data)
       this.setState({player: res.data})
     })
     .catch(error => console.log('Catch error', error))
  }



  render () {
  return (
    <div className="App">
      <h1>hello</h1>
      <PlayerData player={this.state.player} />
    </div>
   );
  } 
}

export default App;
