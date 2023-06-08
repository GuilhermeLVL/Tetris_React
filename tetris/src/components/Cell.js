import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetromicos";

const Cell =({type}) => (

<StyledCell type={'type'} color={TETROMINOS[type].color}>cell</StyledCell>


);

export default Cell;