import './App.css';
import Functions from './functions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Functions.getResult(1, 100)}
      </header>
    </div>
  );
}

export default App;
