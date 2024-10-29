// Stine Julius


// Check if JavaScript is working in console
console.log("The site is working");


// User clicks on the element with the class "vælg-internat-box"
// Drop down picker shows up underneath (if user clicks outside the drop down picker, it disapears)
// User clicks on one of the different animals' homes
// The picked animal home name appears in the white field.
// (When a user has picked an animal home the calendar appears down under)


/**
 * GLOBAL VARIABLES
 */
const inputOuterHTML = document.getElementById("internat-box-outer");
const animalsHomeNames = ["Bornholms Internat", "Brande Internat", "Dyrenes Beskyttelse Århus", "Falsters Internat", "Fuglebjerg Internat", "Fyns Internat", "Nordjyllands Internat", "Roskilde Internat", "Viborg Internat"];

/**
 * SETUP OF EVENT LISTENERS
 */
inputOuterHTML.addEventListener("click", () => {
    foldOutAnimalsHomeNames(inputOuterHTML)
})

// =============== This function gets called when a user clicks on the inputHTML
function foldOutAnimalsHomeNames(inputHTML) {
    // When we try to open dropdown, then we first check if we already have it open
    if (inputOuterHTML.getElementsByClassName("drop-down-animalhome-list").length > 0) {
        return; // If its already open, then just don't do anything (stop function)
    }

    // a div element is created
    const animalNamesContainersHTML = document.createElement("div");

    //the div element gets a class added to it
    animalNamesContainersHTML.classList.add("drop-down-animalhome-list");

    // for loop goes through the array
    for (let i = 0; i < animalsHomeNames.length; i++) {
        // animalName variable created to get the current item from the array (den som man er nået til - det er forskelligt hele tiden)
        const animalName = animalsHomeNames[i];

        // a p tag is created
        const animalNameHTML = document.createElement("p"); // LOCAL VARIABLE

        // the current item from array is put into the p tag (inner HTML er det som er mellem <x> og </x>)
        animalNameHTML.innerHTML = animalName;

        // a p tag inside the div is waiting for a click to start the function insertAnimalHomeName
        animalNameHTML.addEventListener("click", (event) => {
            event.stopPropagation(); // Don't give click event to other eventListeners

            insertAnimalHomeName(animalName)
        })

        // the p tags are inserted in the div, one after each other (appendChild = sættes ind i slutningen af elementet efter det andet indhold)
        animalNamesContainersHTML.appendChild(animalNameHTML);
    }

    // div'en bliver sat ind i inputHTML (den originale box) efter det andet indhold
    inputHTML.appendChild(animalNamesContainersHTML)
}

// =============== This function gets called when a user clicks on a specific animalNameHTML (p)
function insertAnimalHomeName(animalName) {
    // Find class "internat-box" inside of inputOuterHTML, and store it in inputBoxHTML variable
    const inputBoxHTML = inputOuterHTML.getElementsByClassName("internat-box")[0] // [0] We know there is only one element with this class

    // Find class "internat-box__text" inside of inputBoxHTML, and store in inputTextHTML variable
    const inputTextHTML = inputBoxHTML.getElementsByClassName("internat-box__text")[0]; // [0] We know there is only one element with this class

    // Replace the inner HTML of the variable inputTextHTML with animalName
    inputTextHTML.innerHTML = animalName;

    // the inputBoxHTML gets the class "internat-box--selected"
    inputBoxHTML.classList.add("internat-box--selected");

    // makes the whole list of animalhomes dissapear - it calls the function that removes it
    closeAnimalNamesContainer();
}


// The function removes the animalhomes list 
function closeAnimalNamesContainer() {
    // Find the class "drop-down-animalhome-list", and store it in the variable animalNamesContainersHTML
    const animalNamesContainersHTML = document.getElementsByClassName("drop-down-animalhome-list")[0];
    
    // the function is called
    animalNamesContainersHTML.remove();
}





// =============== Makes the "drop-down-animalhome-list" close when clicking outside

// Adds EventListener, that listens to a "click" event on the document (the body from HTML)
document.addEventListener("click", function (event) {
    onDocumentClick(event);
});

// Function that runs with every click on the document
function onDocumentClick(event) {
    const animalNamesContainersHTML = document.getElementsByClassName("drop-down-animalhome-list")[0];

    // if the animalNamesContainersHTML is undefined, it means that it is not open
    if (animalNamesContainersHTML === undefined) {
        return;
    }


    // If event.target is either the animalNamesContainersHTML or the inputOuterHTML, then we don't do anything
    // Event.target is the Element that has been clicked on.
    if (animalNamesContainersHTML.contains(event.target) || inputOuterHTML.contains(event.target)) {
        return;
    }

    // makes the whole list of animalhomes dissapear - it calls the function that removes it
    closeAnimalNamesContainer();
}

