function showSpinner() {
  document.querySelector('.spinner-backdrop').classList.add('is-open');
}

function hideSpinner() {
  document.querySelector('.spinner-backdrop').classList.remove('is-open');
}

export default { showSpinner, hideSpinner };
