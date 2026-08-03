const button = document.getElementById('bpro');
const buttonDois = document.getElementById('bproDois');

function pageChange(e) {
  e.preventDefault();
  if (login) {
    window.location.href = '/pages/acheProfissional.html';
  } else {
    window.location.href = '/pages/login.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  button.addEventListener('click', pageChange);
  buttonDois.addEventListener('click', pageChange);
});
