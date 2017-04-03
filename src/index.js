import $ from 'jquery'
import Screen from 'Screen'
import Perso from 'Perso'



// Here instances of my objects
$(function() {
    const screen = new Screen(300, 300, 30, 30, $('.js-screen'))
    new Perso({
        x: 0,
        y: 0,
        direction: 'bottom',
        spriteWidth: 30,
        spriteHeight: 30,
        maxX: screen.getMaxX(),
        maxY: screen.getMaxY(),
        perso: $('.js-perso')
    })
    // new Perso(0, 0, 'bottom', 30, 30, $('.js-perso'))

    // var caillou = new Item(1, 3, 2, 3, true)
    // var arbre = new Item(1, 3, 2, 3)
})
