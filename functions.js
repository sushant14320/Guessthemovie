let ulstr = ''
let UpdateUI = (moviearray) => {
    let build = ''
    moviearray.forEach((i) => {
        build = build + i

    })
    movieName.textContent = "";
    movieName.textContent = build
}



let checkWin = (wincheck,name) => {
    if (wincheck.length === 0) {
        
        h3.textContent = localStorage.getItem('name')
        afterwin()
        localStorage.removeItem('name')
    }
}

let updateChances = (value) => {

    --chances

    console.log(chances)
    if (chances === 0) {
        alert("You Lost")
        alert("Redirecting to main page ! Thank you for play")
        chancesleft.textContent = '0'
        window.location.href = "index.html";

    } else {
        // ulstr = ulstr + <i id="lii">${value}</i>
        // ullist.innerHTML = ulstr
        // --chances
        chancesleft.textContent = chances

    }
    
}





let checkLetter = () => {

    const input = document.getElementById('inptText').value;
    if (!/^[a-zA-Z]$/.test(input)) {
        alert('Please enter a single letter.');
        // event.preventDefault(); // Prevent form submission
    }
    else
    {
    
    value = enteredValue.value



    correctLetters.map((values) => {
        incorrectletters.push(values.chracter)

    })


    let jsonString = JSON.stringify(incorrectletters);
    console.log(jsonString)

    let isPresent = jsonString.includes(value);





    if (isPresent) {
        let indextoremove = wincheck.indexOf(value)

       
        for (let i = wincheck.length - 1; i >= 0; i--) {
            if (wincheck[i] === value) {
                wincheck.splice(i, 1);
            }
        }
        //console.log(rarray)
        //console.log("before" + wincheck)
        //wincheck.splice(indextoremove, 1);
        console.log("wincheck:" + wincheck)
        correctLetters.map((letter) => {
                if (letter.chracter === value) {
                    console.log(letter.chracter, letter.index)

                    moviearray[letter.index] = letter.chracter

                    UpdateUI(moviearray)
                    incorrectletters = []
                    checkWin(wincheck,value)
                    

                }
            })
            //checkWin(wincheck)

    } else {
        updateChances(value)
    }




}
}

let MaskandPush = (moviearray, correctLetters) => {
    for (i = 0; i < length; i++) {

        let ran = Math.floor(Math.random() * length)
            // console.log("randon" + ran)
        if (moviearray[ran] == " ") {
            console.log("empty string")
        } else {
            // console.log(currently selected: ${moviearray[ran]})
            correctLetters.push({ chracter: moviearray[ran], index: ran })
            moviearray[ran] = ' _ '
        }
    }

}