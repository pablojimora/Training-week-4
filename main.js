//Event to save user data to localStorage
document.getElementById("saveButton").addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    if (!nameInput || !ageInput) {
        console.error("Los elementos del formulario no existen.");
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (name || !isNaN(age)) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userAge", age);
        displayData();
    } else {
        alert("Por favor, ingresa un nombre válido y una edad numérica.");
    }
});

//Function to display stored data from localStorage

function displayData() {
    const name = localStorage.getItem("userName");
    const age = localStorage.getItem("userAge");
    const outputDiv = document.getElementById("output");

    if (name && age){
        outputDiv.textContent = `Hola ${name}, tienes ${age} años.`;
    } else {
        outputDiv.textContent = "No hay datos almacenados.";
    }
}

//When the page loads, display the stored data
window.onload = displayData;

//Init sessionStorage for interaction count
if (!sessionStorage.getItem("interactionCount")) {
    sessionStorage.setItem("interactionCount", 0);
}

//Update interaction count in sessionStorage
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem("interactionCount"));
    count++;
    sessionStorage.setItem("interactionCount", count);
    console.log(`Interacciones de esta sesión: ${count}`);
}

// Assign event listeners to buttons
document.getElementById('saveButton').addEventListener('click', updateInteractionCount);
document.getElementById('clearButton').addEventListener('click', updateInteractionCount);

//Event to clear localStorage 
document.getElementById("clearButton").addEventListener("click", () => {
    localStorage.clear();
    displayData();
});