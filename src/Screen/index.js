import Sprite from 'Sprite'

export default class Screen {
    constructor(width, height, spriteWidth, spriteHeight, element) {
        this.width = width
        this.height = height
        this.element = element
        this.spriteWidth = spriteWidth
        this.spriteHeight = spriteHeight
        this.build()
    }

    build(){
        this.element.css({
            width: this.width,
            height: this.height
        });

        let cols = this.getMaxX()
        let lines = this.getMaxY()

        let grid = []
        for (var y = 0; y < cols; y++) {
            grid[y] = []
            for (var x = 0; x < lines; x++) {
                grid[y][x] = {
                    sprite: new Sprite(this.spriteWidth, this.spriteHeight, {left: x * this.spriteWidth, top: y * this.spriteHeight}, this.element),
                    item: {

                    }
                }
            }
        }

        console.debug(grid)

    }

    getMaxX(){
        return this.width/this.spriteWidth
    }
    getMaxY(){
        return this.height/this.spriteHeight
    }
}
