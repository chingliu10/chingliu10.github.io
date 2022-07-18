document.querySelector('.burger').addEventListener('click', function (e) {

    let lines =	document.querySelectorAll('.line');
    this.classList.toggle('burgerMoveRight');
    document.querySelector('.menu').classList.toggle('menuShiftLeft');
    document.querySelector('.topMenu').classList.toggle('dropTopMenu');
    lines[0].classList.toggle('lineOne');
    lines[1].classList.toggle('lineTwo');
    lines[2].classList.toggle('lineThree');
    
} )