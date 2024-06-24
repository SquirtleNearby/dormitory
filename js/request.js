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


let hidden = false;
const styleElement = document.createElement('style');
styleElement.innerHTML = `
            .main-additional-info-content_title::after,
            .main-additional-info-content_title::before,
            .main-additional__info::after,
            .main-additional_info__openPopup {
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

const closedPopup = document.createElement('style');
closedPopup.innerHTML = '.main-popup, .main-overlay {display: none !important;}';
document.querySelector('.main-popup-form_closed').addEventListener('click', function () {
  document.head.appendChild(closedPopup);
})

const openPopup = document.createElement('style');
openPopup.innerHTML = '.main-popup, .main-overlay {display: flex !important}';
document.querySelector('.main-additional_info__openPopup').addEventListener('click', function () {
  document.head.appendChild(openPopup);
})