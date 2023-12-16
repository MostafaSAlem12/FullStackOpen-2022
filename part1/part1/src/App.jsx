import './App.css'

const App  = () => {
  console.log("Hello from component");
  const now = new Date();
  const a = 10;
  const b = 20;
  return (
      <>
    <div>
        <p>Hello World , it is {now.toString()}</p>
      </div>
      <p>
        {a} plus {b} is {a + b} 
      </p>
    </>
  )
}

export default App
