import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { Store } from "./services/redux/Store";
import { persistStore } from "redux-persist";
import Todo from "./component/todolist";

function App() {
  let persistor = persistStore(Store)
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor} >
        <Todo />
      </PersistGate>
    </Provider>

  );
}

export default App;
