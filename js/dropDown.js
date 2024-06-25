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