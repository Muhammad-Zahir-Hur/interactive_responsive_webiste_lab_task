console.log('script loaded')
function handleDarkMode(element) {
    element.classList.toggle("dark");
}
function handleLearnMore(element) {
    element.classList.toggle('hidden')
}

let contactForm = document.getElementById('contact-form')
let darkBtn = document.getElementById('dark-mode');
let navLinks = document.getElementById('nav-links')
let showMenu = document.getElementById('show-menu')
let body = document.getElementById('body')
let learnMoreModal = document.getElementById('learn-more-modal');
let learnMoreBtn = document.getElementById('learn-more-btn')
learnMoreBtn.addEventListener('click', () => handleLearnMore(learnMoreModal))
darkBtn.addEventListener('click', () => handleDarkMode(body));
showMenu.addEventListener('click', () => {
    navLinks.classList.toggle('shown')
})

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('feedback-message');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || message === '') {
        feedback.style.color = 'red';
        feedback.textContent = 'Error: Please fill in all fields.';
        return;
    }

    if (!emailPattern.test(email)) {
        feedback.style.color = 'red';
        feedback.textContent = 'Error: Please enter a valid email address.';
        return;
    }

    feedback.style.color = 'green';
    feedback.textContent = 'Success: Your message has been sent!';

    this.reset();
});