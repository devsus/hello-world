import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
// import Counter from "./components/Counter";
import ClassClick from "./components/ClassClick";
import UserGreeting from "./conditional-rendoring/UserGreeting";
import NameList from "./listRendoring/NameList";
import Stylesheet from "./cssstyling/Stylesheet";
import InLine from "./cssstyling/InLine";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./formhandling/Form";
import LifecycleA from "./reactlifecycle/LifecycleA";
import FragmentDemo from "./fragment/FragmentDemo";
import Table from "./fragment/Table";
import PureComp from "./purecomponent/PureComp";
import ParentComp from "./purecomponent/ParentComp";
import RefsDemo from "./refs/RefsDemo";
import FocusInput from "./refs/FocusInput";
import FRParentInput from "./refsforwording/FRParentInput";
import GetDataById from "./axios/GetDataById";
import UseStateExample from "./hookspractice/UseStateExample";
import UseEffectExample from "./hookspractice/UseEffectExample";
import PortalDemo from "./portal/PortalDemo";
import Hero from "./errorboundry/Hero";
import ErrorBondary from "./errorboundry/ErrorBondary";
import ClickCounter from "./higherordercomponent_1/ClickCounter";
import HoverCounter from "./higherordercomponent_1/HoverCounter";
import ClickCounterTwo from "./render/ClickCounterTwo";
import HowerCounterTwo from "./render/HowerCounterTwo";
import User from "./render/User";
import Counter from "./render/Counter";
import ComponentC from "./context/ComponentC";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <div className="App">
      {/* <ComponentC /> */}
      {/* setting value for context and wrappig component on UserProvider context */}
      {/* <UserProvider value="Devendra">
        <ComponentC />
      </UserProvider> */}
      {/* <Counter
        //The term render prop refer to a technique for sharing code between react component using  a prop whose values is function
        render={(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClickCounterTwo>
        )}
      />
      <Counter
        //The term render prop refer to a technique for sharing code between react component using  a prop whose values is function
        render={(count, incrementCount) => (
          <HowerCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></HowerCounterTwo>
        )}
      /> */}
      {/* <ClickCounterTwo />
      <HowerCounterTwo />
      <User
        ////The term render prop refer to a technique for sharing code between react component using  a prop whose values is function
        render={(isLoggedIn) => (isLoggedIn ? "Java developer" : "Guest")}
      /> */}
      {/* <ClickCounter name="Devendra" />
      <HoverCounter /> */}
      {/* <ErrorBondary>
        <Hero heroName="Batman" />
      </ErrorBondary>
      <ErrorBondary>
        <Hero heroName="Superman" />
      </ErrorBondary>
      <ErrorBondary>
        <Hero heroName="Joker" />
      </ErrorBondary> */}
      {/* <PortalDemo /> */}
      {/* <UseEffectExample /> */}
      {/* <UseStateExample /> */}
      {/* <GetDataById /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
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
