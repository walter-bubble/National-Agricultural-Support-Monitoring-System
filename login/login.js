// login.js
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
});

function handleLogin(e) {
  e.preventDefault();

  const userName = document.getElementById('userName').value.trim();
  const password = document.getElementById('password').value;

  fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName, password })
  })
    .then(res => res.json())
    .then(data => {
      // Assume backend returns { id: 1, token: "...", userName: "...", role: "FARMER" }
      localStorage.setItem('farmerId', data.id);
      localStorage.setItem('userName', data.userName);
      window.location.href = '../loans/index.html';
    })
    .catch(err => {
      console.error(err);
      alert('Login failed. Check your username and password.');
    });
}