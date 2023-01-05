const addBtn = document.querySelector('.add-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close_modal_window');
const closeModalBtnDown = document.querySelector('.modal-cancel-btn');
const modalInput = document.querySelector('.modal__input');
const modalAddBtn = document.querySelector('.modal-add-btn');
const list = document.querySelector('.list');
const success = document.querySelector('.success');
const chooseBtn = document.querySelector('.choose-btn');


addBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

closeModalBtnDown.addEventListener('click', () => {
    modal.style.display = 'none';
});

modalAddBtn.addEventListener('click', () => {
    let newLi = document.createElement('li');
    newLi.classList.add('lis');
    list.appendChild(newLi);
    newLi.textContent = modalInput.value;
    success.style.display = 'block';
    setTimeout(() => {
        success.style.display = 'none';
    }, 2000);
});

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        choosenLi(randomTag);

        setTimeout(() => {
            unChoosenLi(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            choosenLi(randomTag);
        }, 100);

    }, times * 100);
};

function pickRandomTag() {
    const allLi = document.querySelectorAll('.lis');
    return allLi[Math.floor(Math.random() * allLi.length)];
}

function choosenLi(li) {
    li.classList.add('choosen');
}

function unChoosenLi(li) {
    li.classList.remove('choosen');
}

chooseBtn.addEventListener('click', randomSelect);



