import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
      </div>
      <Weather/>
      <footer>
        This project was coded by Omolola Adeojo and is {"  "}
        <a
          href="https://github.com/omolola-A/react-weather-app.git"
          rel="noreferrer" target="_blank"
        > 
          open-source on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
