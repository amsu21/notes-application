// ACCESS FORM
var form = document.getElementById("myForm");
var submitButton = document.getElementById("buttonId");

// EVENT LISTENER
document.getElementById("buttonId").addEventListener("click", function () {
    submitButton.submit();
})