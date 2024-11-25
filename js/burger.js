const menu = document.querySelector('.header__list');
        
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});

document.querySelector('#callBackBtn').addEventListener('click', function(event) {
    event.preventDefault();

    var phone = document.getElementById('phone').value;
    var name = document.getElementById('name').value;
    var issue = document.getElementById('descr').value;

    fetch("/bot/admin/send", {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: name, phone: phone, issue: issue})
    }).then(response => {
        if (response.status != 200) {
            console.log('Что то пошло не так')
        } else {
            alert('Отправлено!');
        }
    })    
});