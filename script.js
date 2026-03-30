// script.js - Simple Interest Calculator

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('interest-form');
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const timeInput = document.getElementById('time');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        errorDiv.textContent = '';
        resultDiv.textContent = '';

        // Get values and trim whitespace
        const principal = parseFloat(principalInput.value.trim());
        const rate = parseFloat(rateInput.value.trim());
        const time = parseFloat(timeInput.value.trim());

        // Validate inputs
        if (
            isNaN(principal) || principal <= 0 ||
            isNaN(rate) || rate <= 0 ||
            isNaN(time) || time <= 0
        ) {
            errorDiv.textContent = 'Please enter valid positive numbers for all fields.';
            return;
        }

        // Calculate simple interest
        const simpleInterest = (principal * rate * time) / 100;

        // Show result
        resultDiv.textContent = `Simple Interest: ${simpleInterest.toFixed(2)}`;
    });
});
