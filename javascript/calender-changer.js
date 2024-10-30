// Stine Liedicke

/*Image slider calender*/

/*Vores elementer*/
const calenderImage = document.getElementById("calenderImage");
const arrowBack = document.getElementById("arrowBack");
const arrowNext = document.getElementById("arrowNext");


/*Billederne i et array*/
const images = [
    "assets/images/mobile/october-calender.svg",
    "assets/images/mobile/november-calender.svg",
    "assets/images/mobile/december-calender.svg"
];

let currentIndex = 0; //indeks 0 er vores første billede

//den funktion der opdaterer billedet
function updateImage (){
    calenderImage.src = images[currentIndex];
}


//event listener på pilene

arrowBack.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 3 : currentIndex - 1;
    updateImage();
});

arrowNext.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 3 ) ? 0 : currentIndex + 1;
    updateImage();
});

if (currentIndex === 0) {
    currentIndex = images.length - 1
  } else {
   currentIndex = currentIndex - 1
  }

