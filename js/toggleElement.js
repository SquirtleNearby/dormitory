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

function SelectHandyman(element) {
  // Сбросить класс selected у всех элементов
  let handymen = document.querySelectorAll('.handyman-selection > div');
  handymen.forEach(function (handyman) {
    handyman.classList.remove('handyman-selection__flitter_selected');
    let img = handyman.querySelector('img');
    if (img) {
      // Изменить иконку обратно на оригинальную
      let originalIcon = img.src.replace('Blue', '');
      img.src = originalIcon;
    }
  });
  element.classList.add('handyman-selection__flitter_selected');
  let img = element.querySelector('img');
  if (img) {
    let imgSrc = img.src;
    let newImgSrc = imgSrc.replace('.svg', 'Blue.svg');
    img.src = newImgSrc;
  }
}