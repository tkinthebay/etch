const container = document.getElementById("container");

for (let i=1; i <= (16*2); i++) {
    const square = document.createElement("div");
    square.textContent=i;
    container.appendChild(square);
} 