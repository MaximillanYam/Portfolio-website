function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    // Ensure the DOM is fully loaded before attaching event listeners
    document.getElementById('contact-link').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('contact-overlay').classList.add('active');
    });

    document.querySelector('#contact-overlay .close-btn').addEventListener('click', function() {
        document.getElementById('contact-overlay').classList.remove('active');
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle form submission here (e.g., send data to server)
        alert('Form submitted!');
        document.getElementById('contact-overlay').classList.remove('active');
    });
});