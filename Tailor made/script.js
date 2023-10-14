let currentStep = 1;
const form = document.getElementById('booking-form');

function nextStep(step) {
    if (step < 4) {
        document.querySelector(`.step-${step}`).style.display = 'none';
        document.querySelector(`.step-${step + 1}`).style.display = 'block';
        currentStep = step + 1;
    }

    if (currentStep === 4) {
        updateConfirmation();
    }
}

function prevStep(step) {
    if (step > 1) {
        document.querySelector(`.step-${step}`).style.display = 'none';
        document.querySelector(`.step-${step - 1}`).style.display = 'block';
        currentStep = step - 1;
    }
}

function updateConfirmation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bookingDate = document.getElementById('booking-date').value;
    const service = document.getElementById('service').value;

    document.getElementById('confirmation-name').textContent = name;
    document.getElementById('confirmation-email').textContent = email;
    document.getElementById('confirmation-date').textContent = bookingDate;
    document.getElementById('confirmation-service').textContent = service;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    // You can add your submission logic here.
});
