import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import FirstPage from './pages/FirstPage'
import ChatPage from './pages/ChatPage';
class App extends Component {
  constructor() {
    super();
    this.state = { title: 'React Chat App', name: '' }
  }
  newName(pName) {
    this.setState({
      title: 'React Chat App',
      name: pName
    })
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2 className='abc'>{this.state.title} </h2>
        </div>
        <div className="App-intro">
          <Router>
            <div>
              <Route exact path="/" component={(props) => <FirstPage {...props} addName={this.newName.bind(this)} title="Submit" />} />
              <Route exact path="/ChatPage" component={(props) => <ChatPage {...props} pName={this.state.name} />} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
