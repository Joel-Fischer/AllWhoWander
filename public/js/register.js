const signupFormHandler = async (event) => {
    event.preventDefault();
  
    console.log("hello world");

    // const name = document.querySelector('#name').value.trim();
    // const email = document.querySelector('#email').value.trim();
    // const password = document.querySelector('#password').value.trim();
    // const confirmPassword = document.querySelector('#confirm_password').value.trim();

  
    // if (name && email && password && confirmPassword) {
    //     if(password === confirmPassword){
    //         const response = await fetch('/api/users', {
    //             method: 'POST',
    //             body: JSON.stringify({ name, email, password }),
    //             headers: { 'Content-Type': 'application/json' },
    //         });
          
    //         if (response.ok) {
    //             document.location.replace('/login');
    //         } else {
    //             alert(response.statusText);
    //         }
    //     } else {
    //         alert("Password and Confirm Password do not match.");
    //     }
    // }
  };

  document.getElementById('register-btn').addEventListener('click', signupFormHandler);