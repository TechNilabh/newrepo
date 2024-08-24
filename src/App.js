
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Opening from './components/Opening';
import Memories from './components/Memories'; 
import Notes from './components/Notes';
import Light from './components/Light';
import Meme from './components/Meme';
import Home from './components/Home';
import BackgroundGradientAnimation from './components/Background';
import Navbar from './components/Navbar';

export default class App extends Component {
  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <Router>
      <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        {/* <BackgroundGradientAnimation />  */}
        <Navbar />
        <Opening /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/light" element={<Light />} />
          <Route path="/memes" element={<Meme />} />
        </Routes>
      </Router>
    );
  }
}