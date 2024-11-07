# RSA Key Generator

This project is a **JavaScript-based RSA Key Generator**. It allows users to input two prime numbers, `p` and `q`, and generates RSA public and private keys based on these values. The project includes real-time validation, Persian number conversion, and interactive UI features.

## Features

- **Prime Number Validation**: Ensures that `p` and `q` are prime numbers.
- **Persian to English Number Conversion**: Converts Persian numbers to English in the input fields.
- **Real-time Input Validation**: Prevents non-numeric input, showing a popup alert if invalid data is entered.
- **RSA Key Calculation**: Computes public and private keys based on user input.
- **Interactive UI**: Displays the keys in a popup overlay and includes an animation that follows the user's cursor.

## How It Works

1. **Input Handling**: Users enter two prime numbers as `p` and `q`.
2. **Validation**: If `p` or `q` are not prime, an error message is displayed.
3. **RSA Calculation**:
   - `n` is computed as `n = p * q`.
   - `phi` is calculated as `phi = (p - 1) * (q - 1)`.
   - Finds a small integer `e` that is coprime to `phi`.
   - Computes `d`, the modular inverse of `e` with respect to `phi`.
4. **Key Display**: Shows the public key `(e, n)` and private key `(d, n)` in a popup overlay.

## Project Structure

```plaintext
RSA-Key-Generator/
│
├── index.html                   # Main HTML file with the app structure
├── assets/                      # Folder containing styles and scripts
│   ├── styles/
│   │   └── style.css            # CSS file for styling the app
│   └── scripts/
│       └── script.js            # JavaScript file with RSA logic and animations
├── README.md                    # Documentation file (you are reading this)
└── LICENSE                      # License file (optional)
```
# Getting Started
### Prerequisites
This project only requires a modern web browser to run.

## Clone the Project
To download and use this project on your local machine, follow these steps:
```bash
git clone https://github.com/ParsaAzari/RSA-Key-Generator.git
```
Once cloned, navigate to the project directory:
```bash
cd RSA-Key-Generator
```
## Usage

1. Open `index.html` in a web browser.
2. Enter two prime numbers for `p` and `q`.
3. Click the "Generate Keys" button.
4. The RSA public and private keys will be displayed in a popup.

## Code Overview

### JavaScript Functions

- **convertPersianToEnglish(input):** Converts Persian/Arabic numbers to English.
- **convertInputToEnglish(inputId):** Converts input field values to English numerals.
- **processInputP():** Validates `p` input and enables/disables the `q` input field.
- **validateInput(event):** Ensures only numeric input; if invalid input is detected, displays a popup message.
- **showAlert(message):** Displays alert messages in a temporary popup.
- **generateKeys():** Calculates the RSA keys and displays them in a popup.
- **closePopup(event):** Closes the popup when clicking outside or pressing the close button.
- **gcd(a, b):** Calculates the greatest common divisor.
- **modInverse(a, m):** Calculates the modular inverse.
- **isPrime(num):** Checks if a number is prime.

### Interactive Element

An animated element follows the user’s mouse movement on the screen, adding a dynamic feel to the UI.
## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [MIT LICENSE](https://choosealicense.com/licenses/mit/) file for details.

## Acknowledgments

This project was created to demonstrate basic RSA key generation using JavaScript, with added features for user interactivity and accessibility.
