'use strict';
import {clearBtn, taskList, form} from "./constants.js"
import {renderTasks, clearAllTasks, clearSingleTask, createTask} from "./functions.js";
/**
 * Створюємо слухачі на необхідні нам події
 */
document.addEventListener('DOMContentLoaded', renderTasks);
clearBtn.addEventListener('click', clearAllTasks);
taskList.addEventListener('click', clearSingleTask);
form.addEventListener('submit', createTask);
