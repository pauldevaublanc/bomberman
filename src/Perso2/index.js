import $ from 'jquery'

import styles from './index.css'

export default class Perso2 {
    constructor(spriteWidth, spriteHeight, direction, perso) {
        this.spriteWidth = spriteWidth
        this.spriteHeight = spriteHeight
        this.direction = direction
        this.perso = perso
        this.perso.addClass(styles.perso)
        this.perso.css({
            width: 30,
            height: 32
        })
        this.bind()
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


            if (interval === null){
                this.setInterval(assoc[key.which], 500)
            }

        })

        $(document).keyup((key) => {
            clearInterval(interval)
            interval = null
            this.setDirection(assoc[key.which])
        })

    }

    setInterval(direction) {
        switch (direction) {
        case 'left':
            this.perso.css({
                'background-position': '-66px -33px'
            })
            break;
        case 'up':
            this.perso.css({
                'background-position': '-66px -96px'
            })
            break;
        case 'right':
            this.perso.css({
                'background-position': '-66px -65px'
            })
            break;
        case 'down':
            this.perso.css({
                'background-position': '-66px 0px'
            })
            break;
        }
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
