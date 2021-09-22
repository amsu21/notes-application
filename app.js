// ACCESS FORM AND BUTTONS
const form = document.getElementById('myForm');
const button = document.getElementById('submitButton');
const notesButton = document.getElementById('notesButton');
const deletedButton = document.getElementById('deleteButton');

// EVENT LISTENER FOR BUTTON
// function submitButton() {
//     document.getElementById('submitButton').addEventListener('click', () => {
//         arrayData();
//     })
// }

function allFunctions() {
    document.getElementById('submitButton').addEventListener('click', () => {
        arrayData();
        noteCounter();
    })
}

// NAME FUNCTION
// function receiveName() {
//     var name = document.getElementById('input_id').value;
//     //document.getElementById('alert').innerHTML = "The user's name is: " + name;
// }

// // NOTE FUNCTION
// function receiveNotes() {
//     var note = document.getElementById('inputId').value;
//     //document.getElementById('prompt').innerHTML = "This note shows: " + note;
// }


// FUNCTION THAT SAVES DATA TO AN ARRAY
function arrayData() {
    var noteData = [];
    var newName = document.getElementById('input_id').value;
    var newNote = document.getElementById('inputId').value;
    // PUSH DATA TO THE ARRAY
    noteData.push(newName);
    noteData.push(newNote);
    console.log(noteData);
    // PRINT ALL VALUES FROM THE ARRAY
}

// FUNCTION THAT KEEPS COUNT OF NOTES
var counter = 0;
function noteCounter() {
    counter++;
    console.log(counter);
}

allFunctions(); 
//submitButton();