






















document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password123') {
    document.getElementById('loginStatus').textContent = 'Login successful!';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('logout').style.display = 'inline';
  } else {
    document.getElementById('loginStatus').textContent = 'Invalid credentials. Try again.';
  }
});

document.getElementById('logout').addEventListener('click', function () {
  document.getElementById('loginStatus').textContent = '';
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('logout').style.display = 'none';
});















































