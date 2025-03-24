document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.querySelector("form");

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for validation

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const card = document.getElementById("card").value.trim();
        const expiry = document.getElementById("expiry").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        // Regular expressions for validation
        const cardRegex = /^[0-9]{16}$/; // 16-digit card number
        const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
        const cvvRegex = /^[0-9]{3,4}$/; // 3 or 4-digit CVV

        // Validation checks
        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!cardRegex.test(card)) {
            alert("Please enter a valid 16-digit card number.");
            return;
        }

        if (!expiryRegex.test(expiry)) {
            alert("Please enter expiry date in MM/YY format.");
            return;
        }

        if (!cvvRegex.test(cvv)) {
            alert("Please enter a valid CVV.");
            return;
        }

        // If all checks pass, simulate payment processing
        alert("Payment successful! Redirecting...");
        window.location.href = "success.html"; // Redirect to success page
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
