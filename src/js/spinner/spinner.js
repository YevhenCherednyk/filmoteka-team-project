function showSpinner(selector) {
  document.querySelector(selector).classList.add('is-open');
}

function hideSpinner(selector) {
  document.querySelector(selector).classList.remove('is-open');
}

export default { showSpinner, hideSpinner };
