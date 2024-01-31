const container = document.getElementById("container");
container.style.backgroundColor="black";


function createGrid (numSquare) {
for (let i=1; i <= (numSquare**2); i++) {

    const square = document.createElement("div");
    square.className = "square";
    // square.textContent=i;
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
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    console.log(typeof(randomColor));
    element.style.backgroundColor="#"+randomColor;
})

buttonSize = document.createElement("button");
buttonSize.textContent = "change size";

document.body.prepend(buttonSize);


buttonSize.addEventListener("click", function(){
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