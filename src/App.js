import { Provider } from "react-redux";
import BookContainer from "./Components/BookContainer";
import store from "./Redux/Store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <BookContainer />
      </div>
    </Provider>
  );
}
