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

document.addEventListener("DOMContentLoaded", function () {
    const noteInput = document.getElementById("noteInputName");
    const noteInputPassword = document.getElementById("noteInputPass");
    const saveNoteBtn = document.getElementById("saveBtn");
    const notesContainer = document.getElementById("notesContainer");
    
    loadNotes();
    
    saveNoteBtn.addEventListener("click", function () {
        const noteText = noteInput.value.trim();
        const notePass = noteInputPassword.value.trim();
        if (noteText !== "") {
            saveNoteToLocalStorage(noteText, notePass);
            noteInput.value = "";
            noteInputPassword.value = ""
        }
    });
    
    function saveNoteToLocalStorage(text, pass) {
        const timestamp = new Date().toLocaleString();
        const note = { text: text, timestamp: pass };
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(note);
        localStorage.setItem("notes", JSON.stringify(notes));
        loadNotes();
    } 

    function loadNotes() {
        notesContainer.innerHTML = "";
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.forEach(function (note, index) {
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = `
                <p>${note.text}</p>
                <small>${note.timestamp}</small>
                <button onclick="editNote(${index})">Edit</button>
                <button onclick="deleteNote(${index})">Delete</button>
            `;
            notesContainer.appendChild(noteElement);
        });
    }

    window.editNote = function (index) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const editedNote = prompt("Edit the note:", notes[index].text);
        if (editedNote !== null) {
            notes[index].text = editedNote;
            localStorage.setItem("notes", JSON.stringify(notes));
            loadNotes();
        }
    };

    window.deleteNote = function (index) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        loadNotes();
    };
});