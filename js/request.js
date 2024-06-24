// Отображать заявки при клике на стрелочку и переворачивать её
document.querySelectorAll('.dropDownButton').forEach(button => {
  button.addEventListener('click', () => {
    const contentDiv = button.closest('.main-additional-info-content__request__closed').querySelector('.main-additional-info-content__request__open');
    if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
      contentDiv.style.display = 'block';
    } else {
      contentDiv.style.display = 'none';
    }
    button.classList.toggle('open');
  });
});

// Скрывать/открывать иконки изменения объявлений при клике на заголовок
let hidden = false;
const styleElement = document.createElement('style');
styleElement.innerHTML = `
            .main-additional-info-content_title::after,
            .main-additional-info-content_title::before,
            .main-additional__info::after,
            .main-additional_info__openPopup,
            .main-additional-info-content__delete {
                display: inline !important;
            }
        `;
document.querySelector('.main-additional__info__title').addEventListener('click', function () {
  if (hidden) {
    document.head.removeChild(styleElement);
  } else {
    document.head.appendChild(styleElement);
  }
  hidden = !hidden;
});

// Закрыть ПопАпы
const closedPopup = document.createElement('style');
closedPopup.innerHTML = '.main-popup, .main-overlay {display: none !important;}';
function closePopup() {
  document.head.appendChild(closedPopup);
}
document.querySelector('.main-popup-form_closed').addEventListener('click', closePopup);
document.querySelector('.main-overlay').addEventListener('click', closePopup);

// Открыть ПопАпы
const openPopup = document.createElement('style');
openPopup.innerHTML = '.main-popup, .main-overlay {display: flex !important}';
document.querySelector('.main-additional_info__openPopup').addEventListener('click', function () {
  document.head.appendChild(openPopup);
})

// Проверка на наличие сообщений
const contentContainer = document.querySelector('.main-additional-info-content');
function updateNoMessages() {
  if (document.querySelectorAll('.main-additional-info-content_message').length === 0) {
    const noMessagesElement = document.createElement('h3');
    noMessagesElement.classList.add('main-additional_info__noMessages');
    noMessagesElement.textContent = 'На данный момент объявления отсутствуют';
    contentContainer.appendChild(noMessagesElement);
  } else {
    const noMessagesElement = document.querySelector('.no-messages');
    if (noMessagesElement) {
      noMessagesElement.remove();
    }
  }
}

// Удалить ближайшее к кнопке удаления объявление
document.querySelectorAll('.main-additional-info-content__delete').forEach(button => {
  button.addEventListener('click', () => {
    const oneMessage = button.closest('.main-additional-info-content_message');
    oneMessage.remove();
    updateNoMessages();
  })
})

