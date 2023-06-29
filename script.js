function login() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    var users = [
      {
        "user": "admin",
        "password": "senha"
      },
      {
        "username": "user",
        "password": "password123"
      }
    ];

    var authenticatedUser = users.find(function(user) {
      return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
      alert('Login bem-sucedido! Redirecionando para a página principal.');
      // Aqui você pode redirecionar o usuário para a página principal após o login
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }