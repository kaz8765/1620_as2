//List of notes
const notesList = [
    { 
      title: "first note", 
      noteBody: "this is an example note",
      id: 1 
    }
  ]

//Target area to store note in
const noteList=document.querySelector('.notes-list')
noteList.innerHTML='<li>'+notesList[0].title+'</li>'

// Define text area
const textArea=`
<textarea id="note" name="story" rows="5" cols="33" enabled>
</textarea>
<div class="options">
    <div class="a">save</div>
    <div class="b">cancel</div>
</div>
</div>`

//Target + sign 
const plusSign=document.querySelector('i')

//Target area to write note in
const noteWriteArea=document.querySelector('.write-note-area')






//Function to display textArea in correct area and target new DOM objects


function displayNote(evt){
  
  noteWriteArea.insertAdjacentHTML('beforeend',textArea)

  //Target new DOM objects the cancel and save button
  const cancelButton = document.querySelector('.b')
  const saveButton=document.querySelector('.a')
  
  cancelButton.addEventListener('click', removeNote)
  saveButton.addEventListener('click', createNote)
  saveButton.addEventListener('click', removeNote)
}

//Ensure clicking plus sign does not create duplicate text areas hence once:true

plusSign.addEventListener('click',displayNote,{once:true});


//Remove note function

function removeNote(evt){
  noteWriteArea.innerHTML=''
//Re-initialize the display area when clicking + after closing by save or cancel

  plusSign.addEventListener('click',displayNote)
  }

  
//Function to store note 

function createNote(evt){
//Selects text area
  const textArea=document.querySelector('textarea#note')
//Saves entire text
  const textAreaValue=textArea.value
//Splits text into an array
  const noteArray=textAreaValue.split('\n')
//Assigns first line as title
  const noteTitle=noteArray[0]
  
  notesList.push({title:noteTitle,noteBody:textAreaValue, id:notesList.length+1})

  console.log(notesList)
  noteList.insertAdjacentHTML('afterbegin','<li>'+noteTitle +'</li>')
  const styling=document.querySelector('.notes-list li')
  styling.classList.add('.notes-list li')
 

}


