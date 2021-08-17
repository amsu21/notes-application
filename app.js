// ACCES FORM
let form = querySelector(".form");

// GET DATA
document.querySelectorAll("#myForm input");


// EVENT LISTENERS


// FUNCTION
Array.from(document.querySelectorAll("#myForm input")).reduce((acc, input) => ({
    ...acc, [input.id]: input.value }), {});