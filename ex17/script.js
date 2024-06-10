// Vitória Karoline de Carvalho Bernardo

document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('loggedIn') === 'true') {
      document.getElementById('message').innerText = 'Você já está logado.';
    }
  
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      const correctUsername = 'admin';
      const correctPassword = '1234';
  
      if (username === correctUsername && password === correctPassword) {
        localStorage.setItem('loggedIn', 'true');
        document.getElementById('message').innerText = 'Login bem-sucedido!';
        document.getElementById('message').style.color = 'green';
      } else {
        localStorage.setItem('loggedIn', 'false');
        document.getElementById('message').innerText = 'Usuário ou senha incorretos.';
        document.getElementById('message').style.color = 'red';
      }
    });
  });
  