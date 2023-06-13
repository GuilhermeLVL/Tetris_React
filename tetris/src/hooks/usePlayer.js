import { useState } from "react";

import { randomTetromino } from "../tetromicos";

export const usePlayer = () => {

const [player, setPlayer ] = useState({
    pos:{x:0, y:0 }
    tetrominio: randomTetromino().shape,
    collided:false,



})

return [player];
    
}