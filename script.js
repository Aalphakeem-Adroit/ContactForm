document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var isValid = true;
    var errorMessageElements = form.querySelectorAll('.error-message');
    var successMessageElement = document.getElementById('form-success');

    // Hide all error messages
    errorMessageElements.forEach(function(element) {
        element.style.display = 'none';
    });

    // Remove error class from all fields
    form.querySelectorAll('input, select, textarea').forEach(function(element) {
        element.classList.remove('error');
    });

    // Check each required field
    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(function(element) {
        if (!element.value.trim()) {
            isValid = false;
            var errorElement = element.nextElementSibling;
            element.classList.add('error');
            if (errorElement) {
                errorElement.style.display = 'block';
            }
        }
    });

    // Special handling for checkbox
    var consentCheckbox = document.getElementById('consent');
    if (!consentCheckbox.checked) {
        isValid = false;
        var errorElement = consentCheckbox.parentNode.nextElementSibling;
        consentCheckbox.classList.add('error');
        if (errorElement) {
            errorElement.style.display = 'block';
        }
    }

    // Show success message if form is valid
    if (isValid) {
        form.reset();
        successMessageElement.style.display = 'block';
        setTimeout(function() {
            successMessageElement.style.display = 'none';
        }, 5000);
    }
});