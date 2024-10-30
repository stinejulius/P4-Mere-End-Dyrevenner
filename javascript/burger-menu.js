// Camilla Ankerstjerne

const menuItems = [
    { text: "Forside", href: "index.html" },
    { text: "Tilmeld", href: "tilmeld.html" },
    { text: "Bliv frivillig", href: "#blivfrivillig" },
    { text: "Giv feedback", href: "#givfeedback" },
    { text: "Støt", href: "#stoet" }
];

const burgerMenu = document.getElementById("burgerMenu");;
const menu = document.getElementById("burgermenu");

if (menu) { // Tjekker om menu findes, før vi forsøger at tilføje noget til det
    function createMenu(items) {
        const ul = document.createElement("ul");
        items.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = item.text;
            a.href = item.href;
            li.appendChild(a);
            ul.appendChild(li);
        });
        menu.appendChild(ul);
    }

    createMenu(menuItems);
} else {
    console.error("Elementet 'burgermenu' blev ikke fundet.");
}

if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
} else {
    console.error("Burger-menu-ikonet blev ikke fundet.");
}