// CHALLENGE 2

// Make a program where you ask the user to input a chore (so use prompt again)
// It must then randomly choose someone from an array and print that they need to do the chore
// So you'd ask "What chore needs to be done?" -> and then type dishes as an example
// and it would console.log "Jason needs to do dishes today"

// const chore = prompt("What chore needs to be done?")

// const allChores = []

// for(i=0; i<10; i++){
//     allChores.push(chore)
// }

// console.log(allChores)

let chores = []

    //when the button is clicked we apply a function
    document.querySelector('DOMcontentLoaded'),()=> {
    document.querySelector('.choreBtn').addEventListener('click', addChore)};

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            addChore();
        }
    });

    //the function on clicking
    const addChore = () => {
    
        // event.preventDefault()
        //retrieve value from input
        let chore = document.querySelector('chore').value
        //store value in array
        chores.push(chore)
        //clear field
        document.querySelector('.chore').reset()

        }
