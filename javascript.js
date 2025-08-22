
/* 
1. create a container for the squares to reside in and set fixed dimensions for it
2. create a square that adjusts itself to the dimensions of the container
3. create a loop that creates the wanted square x amount of times
4. make sure the square aligns correctly using flex
5. create mouseover events for the squares that highlight them in a specific color
6. create resize button that prompts for a number
7. let a loop run with the input number to create a new field of squares
8. create different color options
 */


let squareContainer = document.querySelector(".container")




for (let i = 0; i < (16 * 16); i++) {
    let innerSquare = document.createElement("div")
    innerSquare.classList.add("squares")
    squareContainer.appendChild(innerSquare)
}

let innerSquares = document.querySelectorAll(".squares")
    innerSquares.forEach(square => {
    square.addEventListener("mouseover", () => square.style.backgroundColor = "yellow")
})

let sizeButton = document.querySelector("#size")

sizeButton.addEventListener("click", () => {
    let num = prompt("how big do you want it?")
    squareContainer.replaceChildren();
   for (let i = 0; i < (num * num); i++) {
    let innerSquare = document.createElement("div")
    innerSquare.classList.add("squares")
    squareContainer.appendChild(innerSquare)

    let innerSquares = document.querySelectorAll(".squares")
    innerSquares.forEach(square => {
    square.addEventListener("mouseover", () => square.style.backgroundColor = "yellow")
})
} 
})






