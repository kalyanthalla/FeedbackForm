// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Validate form
function validateForm() {
    const experience = document.querySelector('input[name="experience"]:checked');
    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const code = document.getElementById("codeList").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const agree = document.getElementById("agree").checked;
    const error_message = document.getElementById("error_message");

    if (!experience) {
        error_message.textContent = "Please select your experience rating";
        return false;
    }
    if (name.length < 3) {
        error_message.textContent = "Please enter a valid name (at least 3 characters)";
        return false;
    }
    if (subject.length < 5) {
        error_message.textContent = "Please enter a subject (at least 5 characters)";
        return false;
    }
    if (code === "") {
        error_message.textContent = "Please select your country code";
        return false;
    }
    if (isNaN(phone) || phone.length < 7) {
        error_message.textContent = "Please enter a valid phone number";
        return false;
    }
    if (email.indexOf("@") === -1 || email.length < 6) {
        error_message.textContent = "Please enter a valid email address";
        return false;
    }
    if (message.length < 50) {
        error_message.textContent = "Please enter at least 50 characters for your feedback";
        return false;
    }
    if (!agree) {
        error_message.textContent = "Please agree to the terms and conditions";
        return false;
    }

    error_message.textContent = "";
    return true;
}

// Submit form
function submitForm() {
    if (validateForm()) {
        // Here you would normally submit to your backend
        // For demo purposes, we'll just show a success message
        showToast("Thank you for your feedback!");
        document.getElementById('feedbackForm').reset();
    }
}

// Click anywhere to submit
document.addEventListener('click', function(e) {
    // Don't submit if clicking on the form elements
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'LABEL') {
        return;
    }

    // Validate and submit if clicking outside the form
    if (!e.target.closest('.wrapper')) {
        submitForm();
    }
});

// Validate fields on blur
document.querySelectorAll('#feedbackForm input, #feedbackForm textarea').forEach(element => {
    element.addEventListener('blur', validateForm);
});

// Only allow numbers in phone field
document.getElementById('phone').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
