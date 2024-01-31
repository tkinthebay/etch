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
    // console.log(numSquare);
    // console.log(Number(numSquare));
    // console.log(`Number(numSquare)>100 is ${Number(numSquare)>100}`);
    // console.log(`Number(numSquare)<=0 is ${Number(numSquare)<=0}`);
    // console.log(`Number(numSquare)==NaN is ${Number(numSquare)==NaN}`);
    // console.log(`Number(numSquare) is a number between 1 and 100 is ${Number(numSquare)>0 && Number(numSquare)<=100}`);

    while ((Number(numSquare)>0 && Number(numSquare)<=100)!=true) {
        numSquare=prompt("The range of possible squares is from 1 to 100. Please enter a number from 1 to 100.");
        console.log(numSquare);
    }
    container.replaceChildren();
    createGrid(numSquare);
}
);