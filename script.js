(() => {
  const inputs = document.querySelectorAll('input.field');

  inputs.forEach(input => {
    // Si input deja gen valè lè paj la chaje
    if (input.value.trim() !== '') {
      input.parentElement.classList.add('input--filled');
    }

    // Lè input pran focus
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('input--filled');
    });

    // Lè input pèdi focus
    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        input.parentElement.classList.remove('input--filled');
      }
    });
  });
})();