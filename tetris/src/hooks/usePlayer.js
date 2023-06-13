import { useState } from "react";

import { randomTetromino } from "../tetromicos";

export const usePlayer = () => {

const [player, setPlayer ] = useState({
    pos:{x:0, y:0 },
    tetrominio: randomTetromino().shape,
    collided:false,
})

const updatePlayerPos = ({ x,y, collided}) => {
  setPlayer(prev => ({
    ...prev,
    pos:{x:(prev.pos.x += x), y: (prev.pos.y += y)},
    collided,
  }))  

}

return [player];
    
}