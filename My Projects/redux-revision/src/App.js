import { createContext, useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Counter from "./components/Counter";
import store from "./store";
import { Provider } from "react-redux";
import CounterUsingContext from "./components/CounterUsingContext";

const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(prev => prev + 1);
  }
  const decrementCount = () => {
    setCount(prev => prev - 1);
  }
  const contextValue = {
    count,
    incrementCount,
    decrementCount
  }
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <Alert/>
      </div>
    </Provider>
  //  <CounterContext.Provider value={contextValue}>
  //     <div className="App">
  //       <CounterUsingContext />
  //       <Alert/>
  //     </div>
  //   </CounterContext.Provider>
  );
}

export default App;
export {CounterContext};