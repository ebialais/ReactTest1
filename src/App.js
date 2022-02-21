import './App.css';

function App() {

  const text = ""
  function write (x){
    for(let i=1; i<=100; i++){
      if (i % 3 === 0){
        x += "Fizz"
      }
      if (i % 5 === 0){
        x += "Buzz"
      }
      if (i % 3 != 0 && i % 5 != 0) {
        x+=i
      }
      x += " "
    }
    return x
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {write(text)}
        </p>
      </header>

    </div>
  );
}

export default App;
