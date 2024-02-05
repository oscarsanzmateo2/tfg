document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton')
    const loginButton = document.getElementById('loginButton')

    if (registerButton && loginButton) {
        registerButton.addEventListener('click', function() {
            window.location.href = '/registre'
        });

        loginButton.addEventListener('click', function() {
            window.location.href = '/login'
        });
    }
});