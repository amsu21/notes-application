// ACCESS FORM AND BUTTON
const form = document.getElementById('myForm');
const button = document.getElementById('submitButton');

// EVENT LISTENER FOR BUTTON
 document.getElementById('submitButton').addEventListener('click', () => {
     receiveName();
 });

// NAME FUNCTION
function receiveName() {
    var name = document.getElementById('input_id').value;
    document.getElementById('alert').innerHTML = "The user's name is: " + name;
}

// NOTE FUNCTION
function receiveNotes() {
    var note = document.getElementById('input_id').value;
    document.getElementById('alert').innerHTML = "This note shows: " + note;
}