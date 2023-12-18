import './App.css'

const Header = ()=> {
  return (
    <>
      <p>Hello from the Greetings Application</p> 
    </>
    ) 
}

const Greetings = (user) => {
  return (
    <>
      <p>Hello {user.name} you are {user.id}, you are {user.age} years old </p>
    </>
  )
}


const Footer = (userName) => { 
  console.log("hello worlllld");
  return (
    <>
      <p>greeting app created by <a href="http://github.com/mostafa">{userName.name}Hello world</a></p>
    </>
  )
  
}

const App  = () => {
console.log("Hello from component");
  const now = new Date();
  const a = 10;
  const b = 20;
  return (
    <>
      <Header />
      <div>
        <p>Hello World , it is {now.toString()}</p>
      </div>
      <p>
        {a} plus {b} is {a + b} 
      </p>
      <Greetings name="mostafa" id="1" age={20} />
      <Footer />
    </>
  )
}
export default App
