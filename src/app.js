// List of notes
const notesList = [{
        title: "first note",
        noteBody: "this is an example note",
        id: 1
    }]

// Target area to store note in
const noteList = document.querySelector('.notes-list')
noteList.innerHTML = '<li>' + notesList[0].title + '</li>'

// Define text area
const textArea = `
<textarea id="note" name="story" rows="5" cols="33" enabled>
</textarea>

<div class="options">
<button class="a">save</button>
<button class="b">cancel</button>
</div>

`

// Target + sign
const plusSign = document.querySelector('i')

// Target area to write note in
const noteWriteArea = document.querySelector('.write-note-area')


// Function to display textArea in correct area and target new DOM objects


function displayNote(evt) {
    showNote.innerHTML = ''
    noteWriteArea.insertAdjacentHTML('beforeend', textArea)

    // Target new DOM objects the cancel and save button
    const cancelButton = document.querySelector('.b')
    const saveButton = document.querySelector('.a')

    cancelButton.addEventListener('click', removeNote)
    saveButton.addEventListener('click', createNote)
    saveButton.addEventListener('click', removeNote)
}

// Ensure clicking plus sign does not create duplicate text areas hence once:true

plusSign.addEventListener('click', displayNote, {once: true});


// Remove note function

function removeNote(evt) {
    noteWriteArea.innerHTML = ''
    showNote.innerHTML = ''
    // Re-initialize the display area when clicking + after closing by save or cancel

    plusSign.addEventListener('click', displayNote, {once: true})
}


// Function to store note

function createNote(evt) {


    // Selects text area
    const textArea = document.querySelector('textarea#note')
    // Saves entire text

    const textAreaValue = textArea.value

    if (textAreaValue !== '') {
        // Splits text into an array
        const noteArray = textAreaValue.split('\n')
        // Assigns first line as title
        const noteTitle = noteArray[0]
        noteArray.shift()

        restOfNoteBody = noteArray.join(' ')

        notesList.push({
            title: noteTitle,
            noteBody: restOfNoteBody,
            id: notesList.length + 1
        })


        noteList.insertAdjacentHTML('afterbegin', '<li>' + noteTitle + '</li>')

    }


}


// Target area to display note in
const showNote = document.querySelector('.read-note-area')
const noteSelect = document.querySelector('.notes-list')

function listNote(evt) {


    showNote.innerHTML = ''
    noteWriteArea.innerHTML = ''
    for (const index in notesList) {


        if (notesList[index].title == evt.target.innerText) {


            showNote.insertAdjacentHTML('afterbegin', `
    <textarea id="note" name="story" rows="5" cols="33" disabled>` + notesList[index].title + '\n' + notesList[index].noteBody + `</textarea>
    <div class="options">
        <button class="c">close</button>
    </div>
    </div>`)


        }

    }
    const closeButton = document.querySelector('.c')
    closeButton.addEventListener('click', removeNote)
}

noteSelect.addEventListener('click', listNote)


// Dark Mode
function changeState(newTheme, oldTheme) {
    const divone = document.querySelector('.main-container')

    divone.classList.replace(oldTheme, newTheme)

}


const box = document.querySelector('input[type="checkbox"]')


function test(evt) {

    if (box.checked == true) {

        changeState("dark-theme", "light-theme")


    } else {

        changeState("light-theme", "dark-theme")

    }


}

box.addEventListener('click', test)
