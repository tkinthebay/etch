const container = document.getElementById("container");
container.style.backgroundColor="red";


function createGrid (numSquare) {
for (let i=1; i <= (numSquare**2); i++) {

    const square = document.createElement("div");
    square.className = "square";
    square.textContent=i;
    square.style.flexBasis=`${(1/(numSquare)*100)}%`;
    square.style.flexGrow=`1`;
    container.style.width=`${numSquare*(640/numSquare)}px`;
    container.style.height=`${numSquare*(640/numSquare)}px`;
    container.appendChild(square);
} ;
};

createGrid(16);

container.addEventListener('mouseover', function(e) {
    let element = e.target;
    // console.log(element);
    element.style.backgroundColor="black";
})

button = document.createElement("button");
button.textContent = "size";

document.body.prepend(button);


button.addEventListener("click", function(){
    let numSquare = prompt("How many squares do you want on each side of the grid?");
    container.replaceChildren();
    createGrid(numSquare);
}
);