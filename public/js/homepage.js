const loginHandler = async (event) => {
    document.location.replace('/login')
};

const registerHandler = async (event) => {
    document.location.replace('/register')
};

document.getElementById('login').addEventListener('click', loginHandler);
document.getElementById('register-btn').addEventListener('click', registerHandler);