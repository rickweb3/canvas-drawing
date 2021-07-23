// Initial Data
let currentColor = 'black';
let screen = document.querySelector('$tela');
let ctx = screen.getContext('2d');


// Events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);



// Functions
function colorClickEvent(event) {
    let color = event.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    event.target.classList.add('active');
}


function mouseDownEvent() {

}

function mouseMoveEvent() {


}

function mouseUpEvent() [

]