const menu = document.querySelector('.header__list');
        
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});