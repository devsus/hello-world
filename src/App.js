import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ClassClick from "./components/ClassClick";
import UserGreeting from "./conditional-rendoring/UserGreeting";
import NameList from "./listRendoring/NameList";
import Stylesheet from "./cssstyling/Stylesheet";
import InLine from "./cssstyling/InLine";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./formhandling/Form";
import LifecycleA from "./reactlifecycle/LifecycleA";

function App() {
  return (
    <div className="App">
      <LifecycleA />
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <InLine /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent/> */}
      {/* <FromSubmit/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" herroName="Batman">
        <p>This is children props</p>
       </Greet> */}
      {/* <Greet name="John" herroName="Thonus">
        <button>Action</button>
       </Greet> */}
      {/* <Greet name="Rock" herroName="Superman"/> */}
      {/* <Welcome name="Bruce" herroName="Batman"/> */}
      {/* <Welcome name="John" herroName="Thonus"/> */}
      {/* <Welcome name="John" herroName="Thonus"/> */}
      {/*<Hello/>*/}
    </div>
  );
}

export default App;
