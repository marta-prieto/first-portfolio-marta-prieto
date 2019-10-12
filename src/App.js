import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Marta Prieto</h1>
          <img className="app__image" src="../src/image/foto-marta.jpg" alt="foto Marta"></img>
          <div className="menu__container">
            <h2 className="app__about-me">Mi historia</h2>
            <p></p>

            <h2 className="app__projects">Proyectos</h2>
            <a></a>
            <a></a>
            <a></a>
            <a></a>

            <h2 className="app__contact-links">Contacto</h2>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
