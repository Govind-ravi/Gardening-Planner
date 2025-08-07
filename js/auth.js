document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('#loginForm .toggle-password');
    const passwordInput = document.getElementById('loginPassword');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
    
    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Here you would typically validate and send to server
        console.log('Login submitted:', { email, password, rememberMe });
        
        // Simulate successful login
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const togglePassword = document.querySelector('#registerForm .toggle-password');
    const passwordInput = document.getElementById('registerPassword');
    const confirmInput = document.getElementById('registerConfirm');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
    
    // Password validation
    passwordInput.addEventListener('input', function() {
        validatePassword(this.value);
    });
    
    // Confirm password validation
    confirmInput.addEventListener('input', function() {
        validatePasswordConfirmation();
    });
    
    // Form submission
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        // Get form values
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        
        // Here you would typically send to server
        console.log('Registration submitted:', { name, email, password });
        
        // Simulate successful registration
        setTimeout(() => {
            window.location.href = 'login.html?registered=true';
        }, 1000);
    });
    
    function validatePassword(password) {
        const hints = document.querySelectorAll('.password-hints .hint');
        
        // Check length
        hints[0].classList.toggle('valid', password.length >= 8);
        
        // Check for number
        hints[1].classList.toggle('valid', /\d/.test(password));
        
        // Check for special character
        hints[2].classList.toggle('valid', /[!@#$%^&*(),.?":{}|<>]/.test(password));
    }
    
    function validatePasswordConfirmation() {
        const password = passwordInput.value;
        const confirm = confirmInput.value;
        
        if (confirm && password !== confirm) {
            confirmInput.setCustomValidity("Passwords don't match");
            confirmInput.style.borderColor = 'var(--auth-error)';
        } else {
            confirmInput.setCustomValidity('');
            confirmInput.style.borderColor = 'var(--auth-border)';
        }
    }
    
    function validateForm() {
        // Check password requirements
        const password = passwordInput.value;
        const isValid = password.length >= 8 && 
                        /\d/.test(password) && 
                        /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
        if (!isValid) {
            alert('Please meet all password requirements');
            return false;
        }
        
        // Check password match
        if (password !== confirmInput.value) {
            alert('Passwords do not match');
            return false;
        }
        
        // Check terms agreement
        if (!document.getElementById('agreeTerms').checked) {
            alert('You must agree to the terms and conditions');
            return false;
        }
        
        return true;
    }
});