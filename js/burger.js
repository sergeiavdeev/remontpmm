const menu = document.querySelector('.header__list');
        
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});

document.querySelector('#callBackBtn').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Отправлено!'+ event);
});