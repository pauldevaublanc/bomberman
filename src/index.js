import $ from 'jquery'
// import Screen from 'Screen'
// import Perso from 'Perso'
import Perso2 from 'Perso2'
// import Item from 'Item'


// Here instances of my objects
$(function() {
    // const screen = new Screen(300, 300, 30, 30, $('.js-screen'))
    // new Perso({
    //     x: 0,
    //     y: 0,
    //     direction: 'bottom',
    //     spriteWidth: 30,
    //     spriteHeight: 30,
    //     maxX: screen.getMaxX(),
    //     maxY: screen.getMaxY(),
    //     perso: $('.js-perso')
    // })
    // new Perso(0, 0, 'bottom', 30, 30, $('.js-perso'))
    new Perso2(30, 30, 'bottom', $('.js-perso'))
    // new Item(1, 3, 2, 3, true, $('.js-screen'))
    // var arbre = new Item(1, 3, 2, 3)
})
