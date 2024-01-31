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
} 
}

createGrid(16);