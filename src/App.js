import { Provider } from "react-redux";
import { reduxStore } from "./app/store";
import { Todos } from "./todo/Todos";

function App() {
  return (
    <Provider store={reduxStore}>
      <Todos />
    </Provider>
  );
}

export default App;
