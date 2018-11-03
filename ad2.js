
function changeHeader() {
    var heading = document.getElementById('audietitle');
    heading.innerHTML = 'Changed the header!';
};


// start js trivia function part

triviaFunc = () => {
    alert("Here is a quiz; please enter the letter for the corresponding answer.");
    const value1 = prompt("In what state was Audie Murphy born? a: Texas b: Alabama c: Commonwealth of Virginia");
    if (value1 === "a") {
        alert("Correct!");
    } else {
        alert("Incorrect; please try again.")
        triviaFunc();
    };
}
const value2 = prompt("Up to what age did Audie Murphy live? a: 97 b: 45 c: 29");
    if (value2 === "b") {
        alert("Correct");

    } else {
        alert("Incorrect; please try again.")
        triviaFunc();
    };

const value3 = prompt("In what Service Branch did Audie Murphy serve? a: US Marine Corps b: US Air Force c: US Army");
    if (value3 === "c") {
        alert("Correct");

    } else {
        alert("Incorrect; please try again.")
        triviaFunc();
    };

    trivia.addEventListener("click", function(){
        //call triviaFunc
        triviaFunc();
        });

// end js trivia function part


// start js toggle attempt

// const videoButton = document.getElementById("videoButton");
// const audieGraph = document.getElementById("audieGraph");

// videoButton.addEventListener("click", function(){

//     });
const image = document.querySelector('img');
const video = document.querySelector('iframe');

showMe = () => {
console.log('Here it is', window);
// here is the image ===>>> video alt?
image.classList.toggle("displayClass");
video.classList.toggle("displayClass");
}

// end js toggle attempt

// start table builder JS
tableButton.addEventListener("click", function(){
    const row = movieTable.insertRow(1);
    const cell1 = row.insertCell(0);
    // create variable to insert new cell similar to code above
    cell1.innerHTML = titleInput.value;
    // add yearInput value to cell you just created
    //call resetInputValues function;
  });
  

// end table builder JS







// <body>

//   <button onclick="showMe()">click me</button>  
// </body>
