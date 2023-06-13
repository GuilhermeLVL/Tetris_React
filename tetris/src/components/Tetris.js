import React, {useState} from "react";


import { createStage } from "../gameHelpers";


import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";


import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
const [dropTime, setDropTime] = useState(null);
const [gameOver, setGameOver] = useState(false);

const [player] = usePlayer();
const [ stage, setStage] = useStage(player)


    console.log('re-render');

const movePlayer = dir =>{
    

}
const startGame = () =>{


}

const drop = () =>{

}
const dropPlayer = () =>{
    
}

    return(
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={stage}></Stage>
            <aside>
                {gameOver ? (
                    <Display gameOver={gameOver} text="Game Over" ></Display>
                ) : (
                <div>
                <Display text="Score"></Display>
                <Display text="Rows"></Display>
                <Display text="Level"></Display>
                </div>
                )}
                <StartButton></StartButton>
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;