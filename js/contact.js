document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!name || !email || !subject || !message) {
        alert('Please fill out all fields before submitting.');
        e.preventDefault(); // prevent form submission
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault(); // prevent form submission
        return;
    }

    // Save to localStorage
    const newEntry = {
        name,
        email,
        subject,
        message,
        date: new Date().toISOString().split('T')[0]
    };

    let messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push(newEntry);
    localStorage.setItem('messages', JSON.stringify(messages));

    // Alert confirmation
    alert('Your message has been saved and submitted!');
    // Then the form continues submitting to FormSubmit
});