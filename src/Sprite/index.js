import $ from 'jquery'
export default class Sprite {
    constructor(width, height, position, screen) {
        this.height = height
        this.width = width
        this.position = position
        this.screen = screen
        this.build()
    }

    build(){

        const sprite = $('<div>')
            .addClass('sprite')
            .css({
                position: 'absolute',
                height: this.height,
                width: this.width,
                border: 'solid 1px #000',
                top: this.position.top,
                left: this.position.left
            })
        this.screen.append(sprite)
    }
}
