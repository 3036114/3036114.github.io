// Получаем доступ к элементу input
let input = document.querySelector('.search__input');
let getInput = input.value;

//Создаем элемент
let createElement = function (tagName, className, text) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
}

// Добавляем тег по enter
input.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        let newTag = createElement('li', 'labels__item', getInput);
        let parentTag = document.querySelector('labels__list');
        parentTag.appendChild(newTag);
    }
});

