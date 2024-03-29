import {taskInput, taskList} from "./constants.js";

/**
 * Отримуємо дані з localStorage
 * @return {[String]} - масив з задачами, або пустий масив, якщо localStorage пустий
 */
function getTasksFromLocalStorage() {
    return localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
}

/**
 * Записуємо дані в localStorage
 * @param {Array} tasks - масив з задачами
 */
function setTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * Створюємо окрему задачу
 * @param {String} task - окрема задача
 */
function createSingleTaskElement(task) {
    // Створюємо HTML елемент li
    const li = document.createElement('li');
    // Додаємо елементу клас
    li.className = 'collection-item';
    // Кладемо в нього текстову ноду з задачею
    li.appendChild(document.createTextNode(task));

    // Створюємо обгортку для іконки по кліку на яку буде видалена окрема задача
    const deleteElement = document.createElement('span');
    // Додаємо елементу клас
    deleteElement.className = 'delete-item';
    // Кладемо в нього іконку
    deleteElement.innerHTML = '<i class="fa fa-remove"></i>';
    // Додаємо елемент в елемент списку
    li.appendChild(deleteElement);

    // Додаємо елемент списку в список задач
    taskList.appendChild(li);
}

/**
 * Додаємо в DOM існуючі задачі
 */
function renderTasks() {
    // Отримуємо задачі з localStorage або пустий масив
    const tasks = getTasksFromLocalStorage();

    // Проходимо по масиву задач і додаємо кожну задачу в список, в DOM
    tasks.forEach((task) => {
        createSingleTaskElement(task);
    })
}

/**
 * Створюємо окрему задачу
 * @param {Event} event - The triggering event
 */
function createTask(event) {
    // Блокуємо дефолтний сабміт форми
    event.preventDefault();
    // Виходимо з функції якщо в полі немає тексту і видаляймо непотрібні пробіли до і після тексту
    if (taskInput.value.trim() === '') {
        return;
    }

    // Створюємо нову задачу і додаємо в DOM
    createSingleTaskElement(taskInput.value);
    // Додаємо нову задачу в localStorage
    storeTaskInLocalStorage(taskInput.value);
    // Очищуємо поле після додавання нової задачі в список
    taskInput.value = '';
}

/**
 * Додаємо нову створену задачу в localStorage
 * @param {String} task - окрема задача
 */
function storeTaskInLocalStorage(task) {
    // Отримуємо поточні задачі з localStorage
    const tasks = getTasksFromLocalStorage();

    // Додаємо нову задачу в масив
    tasks.push(task);
    // Записуємо оновлений масив в localStorage
    setTasksToLocalStorage(tasks);
}

/**
 * Видаляємо всі задачі з localStorage та з DOM
 */
function clearAllTasks() {
    // Показуємо користувачу модальне вікно для підтвердження видалення всіх задач
    if (confirm('Ви впевнені що хочете видалити всі задачі?')) {
        // Якщо користувач підтверджує, то видаємо всі задачі з localStorage та з DOM
        localStorage.clear();
        taskList.innerHTML = '';
    }
}

/**
 * Видаляємо окрему задачу з localStorage та з DOM
 * @param {Event} event - The triggering event
 */
function clearSingleTask(event) {
    // Отримуємо батьківський елемент елементу на якому була подія кліку
    const iconContainer = event.target.parentElement;

    // Якщо батьківський елемент має відповідний клас
    if (iconContainer.classList.contains('delete-item')) {
        // Отримуємо підтвердження користувача
        if (confirm('Ви впевнені що хочете видалити цю задачу?')) {
            // Видаляємо елемент з DOM та з localStorage
            iconContainer.parentElement.remove();
            removeTaskFromLocalStorage(iconContainer.parentElement);
        }
    }
}

/**
 * Видаляємо окрему задачу з localStorage та з DOM
 * @param taskToRemove - DOM елемент
 */
function removeTaskFromLocalStorage(taskToRemove) {
    // Отримуємо поточні задачі з localStorage
    const tasks = getTasksFromLocalStorage();

    // Проходимо по масиву задач і видаляємо необхідну
    tasks.forEach((task, index) => {
        if (taskToRemove.textContent === task) {
            tasks.splice(index, 1)
        }
    })

    // Записуємо оновлений масив в localStorage
    setTasksToLocalStorage(tasks);
}

export {
    renderTasks,
    createTask,
    clearAllTasks,
    clearSingleTask,
}
