const rockBtn = document.querySelector('.rockBtn')
const paperBtn = document.querySelector('.paperBtn')
const scissorsBtn = document.querySelector('.scissorsBtn')




paperBtn.addEventListener("click", (e)=>{ return(showItem('Paper'), showRandomItem())});

rockBtn.addEventListener("click", (e)=>{ return(showItem('Rock'), showRandomItem())});

scissorsBtn.addEventListener("click", (e)=>{ return(showItem('Scissors'), showRandomItem())});


const showItem = (item) => {
    const Source = "./Images/" + item + ".png"
    const Img = document.querySelector('.' + item)
    Img.src = Source
    Img.style.display = "block"
}

// const rocks = showItem('Rock2')


const showRandomItem = () => {

    // const Rock2 = showItem('Rock2')
    // const Paper2 = showItem('Paper2')
    // const Scissors2 = showItem('Scissors2')

    const items = ['Rock2', 'Paper2', 'Scissors2']

    const randomIndex = Math.floor(Math.random()*items.length)
    
    const randomItem = items[randomIndex]
    // console.log(randomItem)
    
    return(showItem(randomItem))
}

// const generateBtn = document.querySelector('.generate')
// generateBtn.addEventListener("click", (e)=>{ return(showRandomItem())} )




if(showItem === 'Paper' && showRandomItem === 'Rock2'){
    console.log('you win')
}

if(rockBtn === "clicked" && showRandomItem === 'Scissors2'){
    console.log('you win')
}