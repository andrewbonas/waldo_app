import React from "react"
import Header from '../components/Header';
import Game from '../components/Game';
import Footer from '../components/Footer';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
      < Game/>
      <Footer/>
      </div>
    );
  }
}

export default App
