let currentColor = 'black';

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

function colorClickEvent(event) {
    let color = event.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    event.target.classList.add('active');
}