// function play(){
//     const home =document.getElementById('home')
//     home.classList.add('hidden')

//     const playGround =document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }
function handleKeyboardButtonPress(event){
    const playerPress =event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet =currentAlphabetElement.innerText
    const expectedAlphabet =currentAlphabet.toLowerCase()
    

    if(playerPress===expectedAlphabet){

        const currentScoreElement =document.getElementById('current-score')
        const currentScoreText=currentScoreElement.innerText
        const currentScore =parseInt(currentScoreText)

        const newScore = currentScore +1;

        currentScoreElement.innerText=newScore;
        
        removeBackGroundColor(expectedAlphabet)
        continuGame()

    }else{
        const currentLifeElement =document.getElementById('current-life')
        const currentLifeText =currentLifeElement.innerText
        const currentLife =parseInt(currentLifeText)
        const newLife =currentLife-1

        currentLifeElement.innerText =newLife;
        if(newLife === 0){
            gameOver()
        }
    }
}
document.addEventListener('keyup',handleKeyboardButtonPress )

function continuGame(){
    const alphabets =getARandomAlphabet()
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText=alphabets

    setBackgroundColorById(alphabets)
}


function play(){
    hideElementById('home')
    hideElementById('score ')
    showElementById('play-ground')

    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)

    continuGame()
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('score ')

    const lastScore =getTextElementValueById('current-score')
    setTextElementValueById('game-score' ,lastScore)
}

