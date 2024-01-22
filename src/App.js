import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by{" "}
        <a href="https://potfolio-project.vercel.app/" rel="noreferrer" target="_blank" >Omolola Adeojo </a> and
        is {"  "}
        <a
          href="https://github.com/omolola-A/react-weather-app.git"
          rel="noreferrer"
          target="_blank"
        >
          open-source on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
