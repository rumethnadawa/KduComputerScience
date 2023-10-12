// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    var goTopButton = document.getElementById('goTopButton');

    // Show or hide the button based on scroll position
    window.onscroll = function () {
        if (window.scrollY > 20 || document.documentElement.scrollTop > 20) {
            goTopButton.style.display = 'block';
        } else {
            goTopButton.style.display = 'none';
        }
    };

    // Smooth scroll to the top when the button is clicked
    goTopButton.onclick = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };
});
