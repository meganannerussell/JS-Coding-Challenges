// CHALLENGE 2

// Make a program where you ask the user to input a chore (so use prompt again)
// It must then randomly choose someone from an array and print that they need to do the chore
// So you'd ask "What chore needs to be done?" -> and then type dishes as an example
// and it would console.log "Jason needs to do dishes today"

let chore = document.querySelector(".chore");
let name = document.querySelector(".name");

let choreBtn = document.querySelector(".choreBtn");

choreBtn.addEventListener("click", (e) => {

  return (addToArray(chore, e))
});

let choreArray = [];
console.log(choreArray)



const createChoreItem= function (valueChore, listID) {
    const newListItem = document.createElement("li");
    const newContent = document.createTextNode(valueChore); //text node creates the html for text that isn't there/ textconten replaces it
    newListItem.appendChild(newContent);
    const list = document.querySelector(listID);
    list.appendChild(newListItem);
    // clearField(newToDo);

};


const addToArray = (choreItem, e) => {
  e.preventDefault()
  let choreValue = choreItem.value;
  if (choreValue !== "") {
    choreArray.push(choreValue);

    clearField(choreItem)
    createChoreItem(choreValue,'#chores-list')
  }
};

const clearField =(field)=>{
    if(field !== ''){
       return (field.value = '')
    } };

