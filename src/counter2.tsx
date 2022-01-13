import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { AppRootStateType } from "./state/store";

export const Counter2: React.FC = React.memo(function () {
    const ll = useSelector<AppRootStateType, { a: number }>((state) => {
        return {
            a: state.a,
        };
    });

    console.log("counter2 render");

    return (
        <div>
            <h2>{ll.a}</h2>
        </div>
    );
});
