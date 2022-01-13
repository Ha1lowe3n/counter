import React from "react";

type CounterPropsType = {
    counter: number;
    inc: () => void;
    dec: () => void;
    rnd: (value: number) => void;
};

export const Counter: React.FC<CounterPropsType> = ({
    counter,
    inc,
    dec,
    rnd,
}) => {
    const value = Math.floor(Math.random() * 5);

    return (
        <div>
            <h1>{counter}</h1>

            <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button>
            <button onClick={() => rnd(value)}>RND</button>
        </div>
    );
};
