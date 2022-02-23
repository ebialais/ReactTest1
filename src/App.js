import './App.css';
import Functions from './functions';


function App() {
  const config = {
    3: "Fizz",
    5: "Buzz"
  }

  const results = Functions.getResult(1, 100, config)

  return (
    <div className="App">
      <header className="App-header">
        {
          results.map((result, i) => <p key={i}> {result} </p>)
        }
      </header>
    </div>
  );
}

export default App;
