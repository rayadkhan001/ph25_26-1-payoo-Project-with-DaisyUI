// LOG IN BUTTON FUNCTIONALITY
document.getElementById("loginButton").addEventListener("click", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Define the correct mobile number and PIN number
    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    // Get the mobile number entered by the user
    const mobileNumberValue = document.getElementById("mobile-number").value; 
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    // Get the PIN number entered by the user
    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    // Check if the entered mobile number and PIN number match the correct values
    if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
        window.location.href = "./home.html";
    }
    else{
        alert("Invalid Credentials.");
    }
});