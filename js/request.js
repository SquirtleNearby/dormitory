
// const toggleButton = document.getElementById('toggleButton');
// const contentDiv = document.querySelector('.main-additional-info-content__request__open');

// toggleButton.addEventListener('click', (e) => {
//   // Проверяем текущее значение display
//   if (contentDiv.style.display === 'none') {
//     contentDiv.style.display = 'block';
//   } else {
//     contentDiv.style.display = 'none';
//   }
//   /**@type { HTMLButtonElement } */
//   const button = e.target.closest("button")
//   button.classList.toggle("open")
// });


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
