import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = props => {
  return(
    <div>
    <button onClick={() => props.history.push('/topics')}> Topics </button>
    <h1>Hats Page</h1>
  </div>
  );
};

const TopicDetail = props => {
  return (
    <div>
      <h1>TopicDetail: {props.match.params.topicId}</h1>
    </div>
  );
};

const TopicList = props => {
  return (
    <div>
      <h1>TopicList</h1>
      <Link to={`${props.match.url}/13`}>to topic 13</Link>
    </div>
  );
};


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/hats/' component={HatsPage}></Route>
      <Route exact path='/topics' component={TopicList}></Route>
      <Route path='/topics/:topicId' component={TopicDetail}></Route>
    </div>
  );
}

export default App;
