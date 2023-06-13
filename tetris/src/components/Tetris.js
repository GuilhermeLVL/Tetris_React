import React, {useState} from "react";


import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";


import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { useState } from "react";

const Tetris = () => {
const [dropTime, setDropTime] = useState(null);
const [gameOver, setGameOver] = useState(false)


    console.log('re-render');

    return(
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()}></Stage>
            <aside>
                <div>
                <Display text="Score"></Display>
                <Display text="Rows"></Display>
                <Display text="Level"></Display>
                </div>
                <StartButton></StartButton>
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;