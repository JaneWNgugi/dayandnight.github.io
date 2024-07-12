document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");
    const day = document.querySelector('#day');
    const body = document.querySelector('body');
    
    day.addEventListener('change', () => {
        if (day.checked) {
            body.classList.add('after');
            body.classList.remove('before');
            body.style.backgroundColor = 'white';
        } else {
            body.classList.add('night');
            body.classList.remove('day');
            body.style.backgroundColor = 'black';
        }
    });
});
