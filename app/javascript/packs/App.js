import React from "react"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Waldo from 'images/waldo.jpg'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
      <img src={Waldo} />
      <Footer/>
      </div>
    );
  }
}

export default App
