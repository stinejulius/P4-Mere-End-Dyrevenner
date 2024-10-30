// Stine Julius
// Form picker drop down menu - mobile (Internatvælger)


// Check if JavaScript is working in console
console.log("The site is working");



/**
 * GLOBAL VARIABLES
 */
const inputOuterHTML = document.getElementById("internat-box-outer"); //henter elementet med classen "" fra HTML koden.
const animalsHomeNames = [
    "Bornholms Internat",
    "Brande Internat",
    "Dyrenes Beskyttelse Århus",
    "Falsters Internat",
    "Fuglebjerg Internat",
    "Fyns Internat",
    "Nordjyllands Internat",
    "Roskilde Internat",
    "Viborg Internat"
]; 


/**
 * EVENT LISTENER | Listens after a click on inputOuterHTML, calls function foldOutAnimalsHomeNames
 */
inputOuterHTML.addEventListener("click", () => {
    foldOutAnimalsHomeNames()
}) 


/**
 * FUNCTION | Function starts when user clicks on inputOuterHTML
 */
function foldOutAnimalsHomeNames() {
    // When trying to open the dropdown, first we check if the dropdown is already open
    if (inputOuterHTML.getElementsByClassName("drop-down-animalhome-list").length > 0) {
        return;
    } // If its already open, the function stops here. If not, it goes on. 

    // A div element is created
    const animalNamesContainersHTML = document.createElement("div");

    // The div element gets a class added to it
    animalNamesContainersHTML.classList.add("drop-down-animalhome-list");


    // For loop through the array 
    for (let i = 0; i < animalsHomeNames.length; i++) {

        // animalName created to get the current item from the array
        const animalName = animalsHomeNames[i];

        // p tag is created
        const animalNameHTML = document.createElement("p");

        // The current item from array is put into the p tag
        animalNameHTML.innerHTML = animalName;


        // A p tag inside the div is listening for a click to start the function insertAnimalHomeName
        animalNameHTML.addEventListener("click", (event) => {
            event.stopPropagation(); // Don't give click event to other eventListeners

            insertAnimalHomeName(animalName)
        })

        // The p tags are inserted in the div, one after each other (appendChild = is inserted in the end efter the last one)
        animalNamesContainersHTML.appendChild(animalNameHTML);
    }

    // The div is inserted in inputHTML after the last content
    inputOuterHTML.appendChild(animalNamesContainersHTML)
}


/**
 * FUNCTION | Function starts when user clicks on animalNameHTML
 */
function insertAnimalHomeName(animalName) {

    // Find class "internat-box" inside of inputOuterHTML, and store it in inputBoxHTML variable
    const inputBoxHTML = inputOuterHTML.getElementsByClassName("internat-box")[0]

    // Find class "internat-box__text" inside of inputBoxHTML, and store in inputTextHTML variable
    const inputTextHTML = inputBoxHTML.getElementsByClassName("internat-box__text")[0];

    // Replace the inner HTML of the variable inputTextHTML with animalName (p the user clicks on)
    inputTextHTML.innerHTML = animalName;

    // Adds class to inputBoxHTML -> to style it in CSS
    inputBoxHTML.classList.add("internat-box--selected");

    // Calls the function that removes the animalNamesCOntainersHTML 
    closeAnimalNamesContainer();
}


/**
 * FUNCTION | Function removes animalNamesContainersHTML
 */

// The function removes the animalhomes list 
function closeAnimalNamesContainer() {
    // Find the class "drop-down-animalhome-list", and store it in the variable animalNamesContainersHTML
    const animalNamesContainersHTML = document.getElementsByClassName("drop-down-animalhome-list")[0];

    // Calls the function
    animalNamesContainersHTML.remove();
}


/**
 * EVENT LISTENER | Listens for a click on the whole document (html-body)
 */
document.addEventListener("click", function (event) {
    onDocumentClick(event);
});


/** 
 * FUNCTION | Runs with every click on the document
 */
function onDocumentClick(event) {
    const animalNamesContainersHTML = document.getElementsByClassName("drop-down-animalhome-list")[0];

    // If the animalNamesContainersHTML is undefined, it means that it is not open
    if (animalNamesContainersHTML === undefined) {
        return;
    }

    // If event.target is either the animalNamesContainersHTML or the inputOuterHTML, then we don't do anything
    // Event.target is the Element that has been clicked on.
    if (animalNamesContainersHTML.contains(event.target) || inputOuterHTML.contains(event.target)) {
        return;
    }

    // Calls the function that removes the animalNamesCOntainersHTML 
    closeAnimalNamesContainer();
}