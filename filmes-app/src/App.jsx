import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">VELOZES E FURIOSOS 7</h1>
        <p className="subtitle">Ação | Aventura | Crime | 2015</p>
      </header>

      <main className="main-content">
        <div className="card-grid">
          <div className="card">
            <img 
              src="https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_FMjpg_UX1000_.jpg" 
              alt="Poster do Filme"
              className="card-image"
            />
            <div className="card-body">
              <h3 className="card-title">Pôster Oficial</h3>
            </div>
          </div>

          <div className="card">
            <img 
              src="https://www.blackfilm.com/read/wp-content/uploads/2013/05/FF6-London-premiere-Luke-Evans-Michelle-Rodriquez-Chris-Ludacris-Bridges-Gal-Gadot-Paul-Walker-director-Justin-Lin-and-actors-Elsa-Pataky-Vin-Diesel-Gina-Carano-Jordana-Brewster-Tyrese-Gibson-and-Sung-Kang.jpg?1402461301" 
              alt="Elenco"
              className="card-image"
            />
            <div className="card-body">
              <h3 className="card-title">Elenco</h3>
              <p className="card-text">Vin Diesel, Paul Walker, Dwayne Johnson, Jason Statham, Michelle Rodriguez, Tyrese Gibson, Ludacris, Jordana Brewster, Nathalie Emmanuel, Kurt Russell, Djimon Hounsou, Tony Jaa, Ronda Rousey, Elsa Pataky e Lucas Black.</p>
            </div>
          </div>

          <div className="card">
            <img 
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQU_pRXkVbJfT0a_3CMbn0qYizc38HV_mc2K5xdtnuiP3YKQuqqRXzon5IkUTHRx6X9pZljVbKAZLa26QUtUb5uOHkLyC49Mw" 
              alt="Diretor James Wan"
              className="card-image"
            />
            <div className="card-body">
              <h3 className="card-title">Diretor</h3>
              <p className="card-text">James Wan</p>
            </div>
          </div>
        </div>

        <section className="sinopse">
          <h2 className="sinopse-title">SINOPSE</h2>
          <p className="sinopse-text">
            Em Velozes e Furiosos 7, Dominic Toretto (Vin Diesel), Brian O'Conner (Paul Walker) e o resto da equipe 
            retornam para casa nos Estados Unidos para viver uma vida pacata. Porém, Deckard Shaw (Jason Statham), 
            um assassino profissional, está em busca de vingança pelo coma de seu irmão. Agora, a equipe precisa 
            se reunir para impedir este novo vilão.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Página sobre Velozes e Furiosos 7</p>
      </footer>
    </div>
  );
};

export default App;
