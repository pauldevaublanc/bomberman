import $ from 'jquery'

import styles from './index.css'

export default class Perso {
    constructor(params) {
        this.x = params.x
        this.y = params.y
        this.spriteWidth = params.spriteWidth
        this.spriteHeight = params.spriteHeight
        this.direction = params.direction
        this.perso = params.perso
        this.maxX = params.maxX
        this.maxY = params.maxY
        this.perso.addClass(styles.perso)
        this.perso.css({
            width: 30,
            height: 30
        })
        this.bind()
    }

    forward(direction){
        // mettre le perso dans la bonne direction
        this.setDirection(direction)
        if (direction === 'right') {
            if (this.x < this.maxX - 1){
                this.x += 1
            }
        }
        if (direction === 'up'){
            if (this.y > 0){
                this.y -= 1
            }
        }
        if (direction === 'down'){
            if (this.y < this.maxY -1){
                this.y += 1
            }
        }
        if (direction === 'left'){
            if (this.x > 0){
                this.x -= 1
            }
        }
        this.updateRender()
    }

    updateRender(){
        this.perso.css({
            left: this.x * this.spriteWidth,
            top: this.y * this.spriteHeight
        })
    }

    bind(){
        const assoc = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        }
        let interval = null
        $(document).keydown((key) => {
            this.forward(assoc[key.which])
            // setInterval
            if (interval === null) { // si il y a deja un interval je fais rien je le laisse tourner
                interval = setInterval(() => {
                    console.log('background image update perso')
                }, 500)
            }
        })

        $(document).keyup(() => {
            // je stop mon interval et je le remet à null
            clearInterval(interval)
            interval = null
            console.log('keyup je stop l interval donc mon perso ne bougera plus')
        })
    }

    setDirection(direction){
        switch (direction) {
        case 'left':
            this.perso.css({
                'background-position': '0px -33px'
            })
            break;
        case 'up':
            this.perso.css({
                'background-position': '0px -96px'
            })
            break;
        case 'right':
            this.perso.css({
                'background-position': '0px -65px'
            })
            break;
        case 'down':
            this.perso.css({
                'background-position': '0px 0px'
            })
            break;
        }
    }
}
