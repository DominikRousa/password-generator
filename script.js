document.addEventListener('DOMContentLoaded', function () {
    const lengthRange = document.getElementById('length');
    const lengthValue = document.getElementById('lengthValue');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const specialCharactersCheckbox = document.getElementById('specialCharacters');
    const generateButton = document.getElementById('generate');
    const passwordDisplay = document.getElementById('password');

    lengthRange.addEventListener('input', function () {
        lengthValue.textContent = lengthRange.value;
    });

    generateButton.addEventListener('click', function () {
        const length = lengthRange.value;
        const useUppercase = uppercaseCheckbox.checked;
        const useNumbers = numbersCheckbox.checked;
        const useSpecialCharacters = specialCharactersCheckbox.checked;
        
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const specialCharacters = '!@#$%^&*()_+{}[];:,.<>?';

        let characters = lowercaseLetters;
        let password = '';

        if (useUppercase) {
            characters += uppercaseLetters;
        }
        if (useNumbers) {
            characters += numbers;
        }
        if (useSpecialCharacters) {
            characters += specialCharacters;
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        passwordDisplay.textContent = password;
    });
});