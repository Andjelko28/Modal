const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

btnsOpenModal.forEach(button => {
    button.addEventListener('click', function open() {
        modal.classList.remove('hidden');
    })
});

btnCloseModal.addEventListener('click', function close() {
    modal.classList.add('hidden');
})

document.addEventListener('keydown', function (ev) {
    if (ev.key == 'Escape') {
        modal.classList.add('hidden');
    }
});

