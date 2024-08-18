let movieName = document.getElementById("movie")
let result = document.getElementById("result")
h3 = document.getElementById("h3")
let win = false
let btnCheck = document.getElementById("btn-check")
let restart = document.getElementById("restart")
let enteredValue = document.getElementById("inptText")
let ullist = document.getElementById("ul-matrix")
let chancesleft = document.getElementById("chances")
let Mname = ["harry potter an the chamber of secrets","interstellar","pre destination","tenet","free Guy","vanilla sky"]
let chances = 9

chancesleft.textContent = chances

let wincheck = []
let incorrectletters = []
let moviearray = []
let correctLetters = []

let random = Math.ceil(Math.random() * Mname.length) - 1;
let name  = Mname[random]

console.log("random: " + name)

moviearray = name.split('')
    // console.log(moviearray)

// Octokit.js
// https://github.com/octokit/core.js#readme

localStorage.setItem('name',name)

let length = Math.floor((moviearray.length / 2)) + 3 //getting numeric value to generate random number
    // console.log("lenght" + length)


    if (!localStorage.getItem('modalShown')) {
        // Show the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    
        // When the user clicks on <span> (x), close the modal
        document.getElementsByClassName("close")[0].onclick = function() {
            modal.style.display = "none";
            //localStorage.setItem('modalShown', 'true');
            localStorage.removeItem('modalShown')
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                //localStorage.setItem('modalShown', 'true');
                localStorage.removeItem('modalShown')
            }
        }
    }



    function afterwin(){
        if (!localStorage.getItem('modalShownwin')) {
            // Show the modal
            var modal = document.getElementById("myModalwin");
            modal.style.display = "block";
            restart.addEventListener('click',()=>{
                window.location.href = "index.html";
            })
            // When the user clicks on <span> (x), close the modal
            document.getElementsByClassName("closewin")[0].onclick = function() {
                modal.style.display = "none";
                //localStorage.setItem('modalShown', 'true');
                localStorage.removeItem('modalShownwin')
                window.location.href = "index.html";
            }
        
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    //localStorage.setItem('modalShown', 'true');
                    localStorage.removeItem('modalShownwin')
                    window.location.href = "index.html";
                }
            }
        }
    }
    



MaskandPush(moviearray, correctLetters) // mask the movie and push correct letters to new array
UpdateUI(moviearray)

correctLetters.map((values) => {
    wincheck.push(values.chracter)
})

wincheck = wincheck.filter(item => item !== ' _ ')
console.log(wincheck)

btnCheck.addEventListener('click', checkLetter)
// document.getElementById('letterForm').addEventListener('submit', function(event) {
//     const input = document.getElementById('inptText').value;
//     if (!/^[a-zA-Z]$/.test(input)) {
//         alert('Please enter a single letter.');
//         // event.preventDefault(); // Prevent form submission
//     }
// });

// console.log(correctLetters)
// console.log(moviearray)