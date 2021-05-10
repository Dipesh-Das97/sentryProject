
function App() {
  const breakTheApp = () => {
    throw new Error("This is broken!")
  }
  return (
    <div className="App">
    <h1>Hello Welcome to my app!</h1>
    <p>Click on the button below to create an error</p>
    <button onClick={breakTheApp}>Click ME</button>
    </div>
  );
}

export default App;
