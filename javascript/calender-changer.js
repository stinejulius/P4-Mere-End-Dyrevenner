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

let currentIndex = 0; //indeks 0 er vores første billede currentIndex tager fat i første billede i array

//den funktion der opdaterer billedet og kigger på hvad currentIndex er lig med
function updateImage (){
    calenderImage.src = images[currentIndex];
}


//event listener på pilene - lytter til click


arrowBack.addEventListener("click", () => {
    /*currentIndex er på et billede i arrayet, der trækkes 1 fra image length og vi går et billede tilbage*/
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});


arrowNext.addEventListener("click", () => {
    /*currentIndex er på et billede i arrayet, der trækkes 1 fra image length og vi går et billede frem*/
    currentIndex = (currentIndex === images.length - 1 ) ? 0 : currentIndex + 1;
    updateImage();
});


/*===============================================================
short cut uddybet:

if (currentIndex === 0) {
    currentIndex = images.length - 1
  } else {
   currentIndex = currentIndex - 1
  }
  */
