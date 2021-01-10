const form = document.querySelector('.add-task__form');
const input = document.querySelector('.add-task__form-text');
const formList = document.querySelector('.tasks-list');

// Проверка пустого списка
const checkListEmpty = () => {
   const inputEmpty = document.querySelector('.tasks-list__item-empty');
   if (formList.children.length > 1) {
      inputEmpty.style.display = "none";
   }
   else if (formList.children.length <= 1) {
      inputEmpty.style.display = "block";
      //Очистка Local Storage при обнулении списка;
      localStorage.clear();

   }
}
// Добавление эллемента в local Storage
const setToStorage = () => {
   localStorage.setItem('formList', formList.innerHTML);
}
//Вызов эллемента из Local Storage
const getFromStorage = () => {
   const formListHTML = localStorage.getItem('formList');
   if (formListHTML != null) {
      formList.innerHTML = formListHTML;
   }
}
//Запуск функции вызова
getFromStorage();

//Добавление задачи на страницу
form.addEventListener('submit', (event) => {
   event.preventDefault();
   //Получаем значение формы
   const dataTask = input.value;
   //Забиваем значение в HTML код
   const htmlTask = `<li class="tasks-list__item">
                        <p class="tasks-list__item-text">${dataTask}</p>
                        <div class="tasks-list__buttons">
                           <button class="button tasks-list__item-check"><span id='task-check' class="tasks-list__icon-check"></button>
                           <button class="button tasks-list__item-delete"><span id='task-delete' class="icon-delete"></button>
                        </div>
                     </li>`;
   //Добавляем код на страницу
   formList.insertAdjacentHTML('afterBegin', htmlTask);
   //Проверяем, пустой ли список
   checkListEmpty();
   //Обнуляем форму
   input.value = '';
   // Lобавление эллемента в local Storage
   setToStorage();
});

//Инициализация кнопки
formList.addEventListener('click', (event) => {
   //Удалить задание
   if (event.target.getAttribute('id') == 'task-delete') {
      event.target.closest('li').remove();
      // Lобавление эллемента в local Storage
      setToStorage();
      //Проверяем, пустой ли список
      checkListEmpty();
   }
   //Выполнить задание
   else if (event.target.getAttribute('id') == 'task-check') {
      const checkParentLi = event.target.closest('li');
      const paragraph = checkParentLi.querySelector('.tasks-list__item-text');
      const buttonCheck = checkParentLi.querySelector('.tasks-list__icon-check');
      //Присваиваем класc
      checkParentLi.classList.toggle('tasks-list__item--complete');
      paragraph.classList.toggle('tasks-list__item-text--complete');
      buttonCheck.classList.toggle('tasks-list__icon-check--complete');
      // Lобавление эллемента в local Storage
      setToStorage();
   }
});




