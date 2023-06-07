import React from "react";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {

    return(
        <div>
            <Stage></Stage>
            <aside>
                <div>
                <Display text="Score"></Display>
                <Display text="Rows"></Display>
                <Display text="Level"></Display>
                </div>
                <StartButton></StartButton>
            </aside>
        </div>
    )
}

export default Tetris;