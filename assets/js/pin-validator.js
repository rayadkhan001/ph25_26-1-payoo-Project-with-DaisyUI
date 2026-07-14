// GET STORED USER PIN FROM LOCALSTORAGE AND UPDATE validPin
document.addEventListener('DOMContentLoaded', function() {
  const storedData = localStorage.getItem('userData');
  
  if (storedData) {
    const userData = JSON.parse(storedData);
    // Override the validPin in home.js with the stored user's PIN
    window.validPin = parseInt(userData.pin);
  }
});
