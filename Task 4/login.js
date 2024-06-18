

  const fun=()=>{
    const loginButton = document.querySelector('.login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
  
    loginButton.addEventListener('click', function(event) {
      event.preventDefault();
      
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // Simulate login process
      console.log('Logging in with', username, password);
  
      // Redirect to another page or show an error message
    });
  }