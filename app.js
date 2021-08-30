// ACCESS FORM AND BUTTON
const form = document.getElementById('myForm');
const button = document.getElementById('submitButton');

// EVENT LISTENER FOR BUTTON
 document.getElementById('submitButton').addEventListener('click', () => {
     receiveName();
 });

// DATA FUNCTION
function receiveName() {
    var note = document.getElementById('input_id').value;
    document.getElementById('alert').innerHTML = "The user's name is: " + note;
}