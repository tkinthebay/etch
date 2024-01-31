const container = document.getElementById("container");
container.style.backgroundColor="red";
// container.style.maxWidth = "1000px";


function createGrid (numSquare) {
for (let i=1; i <= (numSquare**2); i++) {

    const square = document.createElement("div");
    square.className = "square";
    square.textContent=i;
    square.style.flexBasis=`${(1/(numSquare)*100)}%`;
    square.style.flexGrow=`1`;
    container.appendChild(square);
} ;
};

createGrid(16);

// const grid = document.getElementsByClassName("square");
// console.log(gebcn);

// const grid = document.querySelector(".square");
// console.log(grid);

// grid.addEventListener("mouseover", function(){
//     // console.log(EventTarget);
//     grid.style.backgroundColor="black";
// });

document.addEventListener('mouseover', function(e) {
    element = e.target;
    console.log(`element is ${element}`)
    console.log(document.elementFromPoint(e.clientX, e.clientY)); 
})