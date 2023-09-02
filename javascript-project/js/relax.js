const container = document.querySelector(".hover_Board");

function createSquareElement() {
    const div = document.createElement("div"); // <div></div>
    div.classList.add("square"); //<div class="square"></div>
//   div.innerText = 0;
    return div;
}

for (let i = 0; i < 644; i++) {
    const squareElement = createSquareElement();
    container.append(squareElement);
    //   container.append(createSquareElement())
}

const squares = container.querySelectorAll(".square");

const getRandom = (limit) => Math.floor(Math.random() * limit);

const getRandomColor = () => {
    const colors = ["red", "blue", "orange", "green", "pink", "purple", "yellow"];
    const randomIndex = getRandom(colors.length);
    return colors[randomIndex];
}

const setColor = (event) => {
    event.target.style.backgroundColor = getRandomColor();
//   event.target.innerText = getRandom(7);
};

const resetColor = (event) => {
    event.target.style.backgroundColor = "#555";
};

for (const square of squares) {
    square.addEventListener("mouseover", setColor);
    square.addEventListener("mouseleave", resetColor);
}
// 0700598923

