document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.main-content__info_machine_column_button');
  const confirmButton = document.querySelector('.main-content__sidebar__button');
  let activeButton = null;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Удаляем класс active со всех кнопок
      buttons.forEach(btn => btn.classList.remove('main-content__info_machine_column_button__active'));
      // Добавляем класс active к нажатой кнопке
      if (!button.classList.contains('main-content__info_machine_column_button__occupied') && !button.classList.contains('main-content__info_machine_column_button__overdue')) {
        button.classList.add('main-content__info_machine_column_button__active');
        activeButton = button;
      }
    });
  });

  confirmButton.addEventListener('click', () => {
    // Если есть активная кнопка, применяем к ней класс selected
    if (activeButton) {
      activeButton.classList.add('main-content__info_machine_column_button__selected');
      activeButton.classList.remove('main-content__info_machine_column_button__active');
      activeButton = null;  // Сбрасываем активную кнопку
    }
  });
});
