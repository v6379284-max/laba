window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
}

const openBtn = document.getElementById('openFormBtn');
const modal = document.getElementById('feedbackForm');
const closeBtn = document.querySelector('.close-btn');

openBtn.onclick = function() {
    modal.style.display = 'flex';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}




