// Natasha Liltorp

console.log("the site is working");

let dropdowns = document.getElementsByClassName("dropdown-box");

function onDropdownClick(dropdown) {

    const content = dropdown.nextElementSibling;
    const arrow = dropdown.querySelector(".dropdown-arrow img");

    const isOpen = content.style.display === "block";

    document.querySelectorAll(".dropdown-box-bodytext").forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(".dropdown-arrow img").forEach((img) => {
        img.style.transform = "rotate(0deg)";
    });

    if (!isOpen) {
        content.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}

for (let dropdown of dropdowns) {
    dropdown.addEventListener("click", function (event) {
        onDropdownClick(dropdown);
    });
}