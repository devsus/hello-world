import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet name="Rock" herroName="Superman"/>
      <Welcome name="Bruce" herroName="Batman"/>
       {/*<Counter/>
      <Message/>
      <Greet name="Bruce" herroName="Batman">
        <p>This is children props</p>
       </Greet>
       <Greet name="John" herroName="Thonus">
        <button>Action</button>
       </Greet>
       <Greet name="Rock" herroName="Superman"/>
      <Welcome name="Bruce" herroName="Batman"/>
      <Welcome name="John" herroName="Thonus"/>
      <Welcome name="John" herroName="Thonus"/>
      <Hello/>*/}
      
    </div>
  );
}

export default App;
