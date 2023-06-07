import React from "react";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {

    return(
        <div>
            <Stage></Stage>
            <aside>
                <Display text="score"></Display>
            </aside>
        </div>
    )
}

export default Tetris;