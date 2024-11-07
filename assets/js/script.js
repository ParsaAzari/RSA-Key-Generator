// Convert Persian numbers to English digits
function convertPersianToEnglish(input) {
    return input.replace(/[۰-۹]/g, function (char) {
        return String.fromCharCode(char.charCodeAt(0) - 1728); // Adjust character code to get English digits
    });
}

// Convert Persian numbers in a specific input field
function convertInputToEnglish(inputId) {
    const inputField = document.getElementById(inputId);
    inputField.value = convertPersianToEnglish(inputField.value); // Apply the conversion to the input field value
}

// Process the P input, enabling or disabling the Q input field
function processInputP() {
    convertInputToEnglish('p'); // Convert Persian numbers to English in the P input

    const pInput = document.getElementById("p");
    const qInput = document.getElementById("q");

    // Enable Q input if P has a value, otherwise disable it
    if (pInput.value) {
        qInput.disabled = false;
    } else {
        qInput.disabled = true;
    }
}

// Validate input to allow only numbers and display a warning popup if a non-numeric value is entered
function validateInput(event) {
    const value = event.target.value;
    if (!/^\d*$/.test(value)) {
        event.target.value = value.replace(/[^\d]/g, ''); // Keep only numeric values
        showAlert("Please type only the number"); // Show a warning message
    }
}

// Show a temporary alert message in a popup
function showAlert(message) {
    const alertPopup = document.getElementById("alert");
    alertPopup.innerText = message; // Set the alert message
    alertPopup.style.display = "block"; // Make the alert visible
    alertPopup.style.opacity = "1"; // Set the alert opacity to 1 for visibility

    setTimeout(() => {
        alertPopup.style.opacity = "0"; // Fade out the alert
        setTimeout(() => {
            alertPopup.style.display = "none"; // Hide the alert after the fade-out
        }, 500);
    }, 5000); // Display the alert for 5 seconds
}

// Add event listeners to validate the inputs for P and Q
document.getElementById("p").addEventListener("input", validateInput);
document.getElementById("q").addEventListener("input", validateInput);

// Generate RSA keys and display them in a popup
function generateKeys() {
    const p = parseInt(document.getElementById("p").value);
    const q = parseInt(document.getElementById("q").value);

    // Check if P and Q are prime numbers
    if (!isPrime(p) || !isPrime(q)) {
        showAlert("P and Q Must Be Prime Numbers."); // Show alert if any number is not prime
        return;
    }

    const n = p * q; // Compute n = P * Q
    const phi = (p - 1) * (q - 1); // Calculate Euler's totient function
    let e = 3;

    // Find an 'e' that is coprime with phi(n)
    while (gcd(e, phi) !== 1) {
        e++;
    }

    const d = modInverse(e, phi); // Compute the modular inverse of e modulo phi(n)

    // Display public and private keys in the popup
    document.getElementById("publicKeyValue").innerText = `Public Key: (${e}, ${n})`;
    document.getElementById("privateKeyValue").innerText = `Private Key: (${d}, ${n})`;

    // Show the overlay and popup with the keys
    document.getElementById("overlay").classList.add("active");
    document.getElementById("popup").classList.add("active");
}

// Close the popup when the overlay or close button is clicked
function closePopup(event) {
    event.stopPropagation(); // Prevent click event from propagating to the overlay

    // Remove the 'active' class to hide the popup and overlay
    document.getElementById("overlay").classList.remove("active");
    document.getElementById("popup").classList.remove("active");
}

// Close the popup if the background is clicked
document.getElementById("overlay").addEventListener("click", closePopup);

// Helper function to calculate the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b); // Recursively compute the GCD
}

// Calculate the modular inverse of 'a' modulo 'm'
// Returns x such that (a * x) % m = 1
function modInverse(a, m) {
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) return x; // If (a * x) % m == 1, return x as the modular inverse
    }
    return 1; // Return 1 if no modular inverse is found
}

// Check if a number is prime
// Returns true if 'num' is prime, false otherwise
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i * i <= num; i++) { // Check for factors up to the square root of num
        if (num % i === 0) return false; // If 'num' is divisible by any number, it's not prime
    }
    return true; // Return true if no divisors were found, meaning the number is prime
}

// Animate an element based on mouse movement
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive'); // Select the interactive element
    let curX = 0; // Initial X position of the element
    let curY = 0; // Initial Y position of the element
    let tgX = 0; // Target X position based on mouse movement
    let tgY = 0; // Target Y position based on mouse movement

    // Function to smoothly move the element towards the target position
    const move = () => {
        curX += (tgX - curX) / 20; // Smooth transition along X axis
        curY += (tgY - curY) / 20; // Smooth transition along Y axis
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`; // Apply transformation
        requestAnimationFrame(move); // Continue the animation
    };

    // Update target positions on mouse move
    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX; // Set the target X position to the mouse's X coordinate
        tgY = event.clientY; // Set the target Y position to the mouse's Y coordinate
    });

    move(); // Start the animation loop
});