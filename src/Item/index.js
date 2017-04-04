import $ from 'jquery'

export default class Perso {
    constructor(x, y, width, height, empty, screen) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.empty = empty
        this.screen = screen
        this.build()
    }

    build(){
        const item = $('<div>')
            .css({
                position: 'absolute',
                height: this.height,
                width: this.width,
                'background-color': 'black',
                top: this.y,
                left: this.x
            })
        this.screen.append(item)
    }
}
