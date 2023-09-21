export function formValidation(form) {
  let checker = true;
  form.querySelectorAll('[required]').forEach(required => {
    const requiredLabel = required.closest('label');
    if (required.value.length === 0) {
      addErrorMarkup(requiredLabel, 'The field is empty!');
    } else {
      const inputPattern = required.pattern;
      const errorText = required.title;
      if (new RegExp(inputPattern).test(required.value)) {
        addErrorMarkup(requiredLabel, errorText);
      }
    }
    //add error text to markup
    function addErrorMarkup(correntLabel, text) {
      const errors = correntLabel.querySelectorAll('.label__error').length;
      if (errors < 1) {
        correntLabel.insertAdjacentHTML(
          'beforeend',
          `<span class="label__error">${text}</span>`
        );
      }
      required.classList.add('red');
      checker = false;
    }
  });
  return checker;
}

export function inputClean(input) {
  const label = input.closest('label').querySelector('.label__error');
  if (label) {
    input.classList.remove('red');
    label.remove();
  }
}
