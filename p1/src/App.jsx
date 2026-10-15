function App() {
  const name = "Shiva Shanker";
  const today = new Date().toLocaleDateString();
  const num1 = 10;
  const num2 = 20;

  return (
    <div>
      <h1>My Details</h1>

      <p>My Name: {name}</p>

      <p>Today's Date: {today}</p>

      <p>
        Sum of {num1} and {num2} = {num1 + num2}
      </p>
    </div>
  );
}

export default App;