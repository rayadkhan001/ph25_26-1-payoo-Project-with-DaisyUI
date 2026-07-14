// Get input elements
const fullNameInput = document.getElementById('full-name');
const mobileNumberInput = document.getElementById('mobile-number');
const pinNumberInput = document.getElementById('pin-number');
const confirmPinInput = document.getElementById('confirm-pin');
const signupButton = document.getElementById('signupButton');

// Handle sign up
signupButton.addEventListener('click', function (event) {
    event.preventDefault();

    const fullName = fullNameInput.value.trim();
    const mobileNumber = mobileNumberInput.value.trim();
    const pin = pinNumberInput.value.trim();
    const confirmPin = confirmPinInput.value.trim();

    // Validation
    if (!fullName) {
        alert('Please enter your full name');
        return;
    }

    if (!mobileNumber) {
        alert('Please enter your mobile number');
        return;
    }

    if (mobileNumber.length < 10) {
        alert('Mobile number must be at least 10 digits');
        return;
    }

    if (!pin) {
        alert('Please enter a 4-digit PIN');
        return;
    }

    if (pin.length !== 4 || isNaN(pin)) {
        alert('PIN must be exactly 4 digits');
        return;
    }

    if (!confirmPin) {
        alert('Please confirm your PIN');
        return;
    }

    if (pin !== confirmPin) {
        alert('PIN and Confirm PIN do not match');
        return;
    }

    // Store user data in local storage
    const userData = {
        fullName: fullName,
        mobileNumber: mobileNumber,
        pin: pin
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Account created successfully! Please login.');
    
    // Redirect to login page
    window.location.href = 'index.html';
});
