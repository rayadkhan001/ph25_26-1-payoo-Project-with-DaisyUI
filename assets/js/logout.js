// LOGOUT BUTTON FUNCTIONALITY
document.getElementById('logoutButton').addEventListener('click', function (e) {
    e.preventDefault();
    
    // Clear user data from localStorage
    localStorage.removeItem('userData');
    
    // Redirect to login page
    window.location.href = './index.html';
});
