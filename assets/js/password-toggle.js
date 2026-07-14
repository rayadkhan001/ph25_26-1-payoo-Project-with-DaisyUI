// PASSWORD VISIBILITY TOGGLE - LOGIN PAGE
const togglePinLoginBtn = document.getElementById('togglePinLogin');
const pinInputLogin = document.getElementById('pin-number');

if (togglePinLoginBtn) {
    togglePinLoginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (pinInputLogin.type === 'password') {
            pinInputLogin.type = 'text';
            togglePinLoginBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            pinInputLogin.type = 'password';
            togglePinLoginBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    });
}

// PASSWORD VISIBILITY TOGGLE - SIGNUP PAGE
const togglePinSignupBtn = document.getElementById('togglePinSignup');
const pinInputSignup = document.getElementById('pin-number');

if (togglePinSignupBtn) {
    togglePinSignupBtn.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (pinInputSignup.type === 'password') {
            pinInputSignup.type = 'text';
            togglePinSignupBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            pinInputSignup.type = 'password';
            togglePinSignupBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    });
}

// PASSWORD VISIBILITY TOGGLE - CONFIRM PIN
const toggleConfirmPinBtn = document.getElementById('toggleConfirmPin');
const confirmPinInput = document.getElementById('confirm-pin');

if (toggleConfirmPinBtn) {
    toggleConfirmPinBtn.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (confirmPinInput.type === 'password') {
            confirmPinInput.type = 'text';
            toggleConfirmPinBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            confirmPinInput.type = 'password';
            toggleConfirmPinBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    });
}
