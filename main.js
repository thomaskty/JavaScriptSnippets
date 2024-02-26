
// 1. Array Literal
let arrayLiteral = [1, 2, 3, "Hello", true];

// 2. Array Constructor
let arrayConstructor = new Array(1, 2, 3, "World", false);

// 3. Empty Array with push
let emptyArrayPush = [];
emptyArrayPush.push(4, 5, 6, "Greetings", true);

// 4. Array.from
let arrayFrom = Array.from([7, 8, 9, "Hola", false]);

// 5. Spread Syntax
let originalArray = [10, 11, 12, "Bonjour", true];
let spreadArray = [...originalArray];

// 6. Array.of
let arrayOf = Array.of(13, 14, 15, "Salut", false);

// Displaying the arrays
console.log("1. Array Literal:", arrayLiteral);
console.log("2. Array Constructor:", arrayConstructor);
console.log("3. Empty Array with push:", emptyArrayPush);


function changeSusbcribeButton() {
    // Get the button element
    var button = document.getElementById("subscribe-button");

    // Toggle between "Subscribe" and "Subscribed" states
    if (button.textContent === "Subscribe") {
        button.textContent = "Subscribed";
        button.style.backgroundColor = "#27ae60"; // Change to your desired color
    } else {
        button.textContent = "Subscribe";
        button.style.backgroundColor = "#3498db"; // Reset to the default color
    }
}


