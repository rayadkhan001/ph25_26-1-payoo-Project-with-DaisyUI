// COMBINED LOGIN LOGIC FOR HARDCODED AND SIGNUP USERS
document.getElementById("loginButton").addEventListener("click", function (e) {
    // Get the mobile number and PIN entered by the user
    const mobileNumberValue = document.getElementById("mobile-number").value.trim();
    const pinNumberValue = document.getElementById("pin-number").value.trim();
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValueConverted = parseInt(pinNumberValue);

    // Define the hardcoded values
    const hardcodedMobileNumber = 12345678910;
    const hardcodedPinNumber = 1234;

    // Check against hardcoded values first
    if (mobileNumberValueConverted === hardcodedMobileNumber && pinNumberValueConverted === hardcodedPinNumber) {
        e.preventDefault();
        window.location.href = "./home.html";
        return;
    }

    // Check against stored user data from localStorage
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        const userData = JSON.parse(storedData);
        if (mobileNumberValue === userData.mobileNumber && pinNumberValue === userData.pin) {
            e.preventDefault();
            window.location.href = "./home.html";
            return;
        }
    }

    // If no match found, show alert
    e.preventDefault();
    alert("Invalid Credentials.");
});
