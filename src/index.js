document.addEventListener("DOMContentLoaded", () => {
    // card options
    const cardArray = [
        {
            name: "circle",
            img: "src/images/circle.png"
        },
        {
            name: "spiral",
            img: "src/images/spiral.png"
        },
        {
            name: "square",
            img: "src/images/square.png"
        },
        {
            name: "star",
            img: "src/images/star.png"
        },
        {
            name: "triange",
            img: "src/images/triange.png"
        },
        {
            name: "x",
            img: "src/images/x.png"
        },
        {
            name: "circle",
            img: "src/images/circle.png"
        },
        {
            name: "spiral",
            img: "src/images/spiral.png"
        },
        {
            name: "square",
            img: "src/images/square.png"
        },
        {
            name: "star",
            img: "src/images/star.png"
        },
        {
            name: "triange",
            img: "src/images/triange.png"
        },
        {
            name: "x",
            img: "src/images/x.png"
        },
    ]
    

    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement("img")
            card.setAttribute("src", "src/images/question.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }

     

    function flipCard(){
        let cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosenIds)
    }

    function checkForMatch(){
        const cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        if(optionOneId == optionTwoId){
            alert("you have clicked the same image")
            cards[optionOneId].setAttribute('src', 'src/images/question.png')
            cards[optionTwoId].setAttribute('src', 'src/images/question.png')
        } else if(cardsChosen[0] === cardsChosen[1]){
            alert("You have found a match!!")
            cards[optionOneId].setAttribute("src", "src/images/white.png")
            cards[optionTwoId].setAttribute("src", "src/images/white.png")
            cards[optionOneId].removeEventListener("click", flipCard)
            cards[optionTwoId].removeEventListener("click", flipCard)
            cardsWon.push(cardsChosen)
        } else{
            cards[optionOneId].setAttribute('src', 'src/images/question.png')
            cards[optionTwoId].setAttribute('src', 'src/images/question.png')
            alert("sorry, try again")
        }
        cardsChosen =[]
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2){
            resultDisplay.textContent = ' Congratulations!! you have won!!'
        }

        console.log(cardsChosen)
        console.log(cardsWon)
    }

    createBoard()  
})