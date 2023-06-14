export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
Array.from(Array(STAGE_HEIGHT), () =>
new Array(STAGE_WIDTH).fill([0, 'clear'])
)

export const checkCollision = (player, stage, {x: moveX, y:moveY }) => {
    for(let y = 0; y < player.tetrominio.length; y += 1){
        for(let x = 0; x < player.tetrominio[0].length; x += 1){

            if ( player.tetrominio[y][x] !== 0){
                
                if(
              //(y)
              stage[y+ player.pos.y + moveY] ||

              !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||

              stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'

              ) {
                return true
              }
            }
        }
    }
}