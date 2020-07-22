// CHALLENGE 2

// Make a program where you ask the user to input a chore (so use prompt again)
// It must then randomly choose someone from an array and print that they need to do the chore
// So you'd ask "What chore needs to be done?" -> and then type dishes as an example
// and it would console.log "Jason needs to do dishes today"

let chore = document.querySelector(".chore");
let name = document.querySelector(".name");

let choreBtn = document.querySelector(".choreBtn");

choreBtn.addEventListener("click", (e) => {

  return (addToArray(chore, e, choreArray, chore.value, '#chores-list'))
});

let choreArray = [];
console.log(choreArray)



let nameBtn = document.querySelector(".nameBtn");

nameBtn.addEventListener("click", (e) => {

  return (addToArray(name, e, nameArray, name.value, '#names-list'))
});

let nameArray = [];
console.log(choreArray)


const createItem=  (value, listID) => {
    const newListItem = document.createElement("li");
    const newContent = document.createTextNode(value); //text node creates the html for text that isn't there/ textconten replaces it
    newListItem.appendChild(newContent);
    const list = document.querySelector(listID);
    list.appendChild(newListItem);
    // clearField(newToDo);

};

const addToArray = (Item, e, arr, Value, listID) => {
  e.preventDefault()
//   let Value = Item.value;
  if (Value !== "") {
    arr.push(Value);

    clearField(Item)
    createItem(Value, listID)
  }
};

const clearField =(field)=>{
    if(field !== ''){
       return (field.value = '')
    } };

const allocateBtn = document.querySelector('.generateBtn')
allocateBtn.addEventListener('click', (e)=>{return (createAllocation(e,'#div-contents'))
})

    const randomIndex =(arr)=>{
        Math.floor(Math.random()* arr.length)
     }
     
     const randomChore = choreArray[randomIndex(choreArray)]
     console.log(randomChore)
     const randomName = nameArray[randomIndex(nameArray)]


const createAllocation = (e, listID)=>{
    e.preventDefault()
    const allocation = document.createElement("p")
    const newContent = document.createTextNode(`${randomName} must complete the chore: ${randomChore}`)
    allocation.appendChild(newContent)
    const line = document.querySelector(listID);
    line.appendChild(allocation);
    }



    // document.createTextNode(`${randomName} must complete the chore: ${randomChore}`)}