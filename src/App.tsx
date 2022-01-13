import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import { Counter } from "./Counter";
import { Counter2 } from "./counter2";
import { AppRootStateType, bindActions } from "./state/store";

function App() {
    const counter = useSelector<AppRootStateType, number>(
        (state) => state.value
    );

    console.log("App initialized");

    return (
        <div className="App">
            <Counter counter={counter} {...bindActions} />
            <Counter2 />
        </div>
    );
}

export default App;
