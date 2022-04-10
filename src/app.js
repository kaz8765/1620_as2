const textArea=`<div class="textarea">
<textarea id="story" name="story" rows="5" cols="33" enabled>



</textarea>


<div class="options">
    <div class="a">save</div>
    <div class="b">cancel</div>

</div>
</div>`



const plusSign=document.querySelector('i')
const noteWriteArea=document.querySelector('.write-note-area')



function displayNote(evt){
  
  noteWriteArea.insertAdjacentHTML('beforeend',textArea)
  const cancelButton = document.querySelector('.b')
  cancelButton.addEventListener('click', removeNote)
  
  
}
// plusSign.addEventListener('click',displayNote)




plusSign.addEventListener('click',displayNote,{once:false});


function removeNote(evt){
  noteWriteArea.innerHTML=''
  
  
}




// const notes = [
//   { 
//     title: "first note", 
//     noteBody: "this is an example note",
//     id: 1 
//   }
// ]

// function displayNote(note){
//   const noteDisplayArea=document.querySelector('#write-text')
//   noteDisplayArea.innerHTML=''
//   noteDisplayArea.insertAdjacentHTML('afterbegin',note)
// }
/*function newNote(noteBody){
  const template=`<p>${noteBody}</p>`
  return template
}



function getNote(){
  const textArea=document.querySelector('#note-input')
  const note=textArea.value
  return note
}

function assembleNote(){
  const noteText=getNote()
  const note=newNote(noteText)
  displayNote(note)
}

saveTextBtn.addEventListener('click',assembleNote)*/

















// function opentextarea() {
//   var input = document.createElement('textarea');
//   input.name = 'post';
//   input.maxLength = 5000;
//   input.cols = 80;
//   input.rows = 40;
//   input.className = 'myCustomTextarea';
//   var button = document.createElement('button');
//   var oBody = document.getElementById("body");
//   while (oBody.childNodes.length > 0) {
//       oBody.removeChild(oBody.childNodes[0]);
//   }
//   oBody.appendChild(input);
//   oBody.appendChild(button);
// }

// const input = document.createElement("input");
//     input.setAttribute("type", "text");
//     document.body.appendChild(input);






// const textArea=<textarea>ffsdfsdf</textarea>
// const selectItem = document.querySelector(`.icons`)
// const makeDuplicate = document.querySelector(`.icons`)

// function copydiv(evt) {
//     selectItem.addEventListener(`click`, evt => {
//         makeDuplicate.insertAdjacentHTML(`afterbegin`, evt.target.innerHTML + textArea)

//     })
// }
// copydiv()