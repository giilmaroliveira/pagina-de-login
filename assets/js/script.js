const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.querySelector('#email');
  const password = document.querySelector('#password');

  console.log('E-mail:', email.value);
  console.log('Password:', password.value);
})