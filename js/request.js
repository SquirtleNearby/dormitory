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
            .main-additional__info::after {
                display: none !important;
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