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
        
        removeBackGroundColor(expectedAlphabet)
        continuGame()
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
    showElementById('play-ground')
    continuGame()
}

