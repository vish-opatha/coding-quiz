var timeLeft = 100;
var displayTime = document.querySelector("#counter");
var quizStartBtn  = document.querySelector("#startQuiz");
var quizForm = document.querySelector(".quizMain");
var formHeader = quizForm.children[0];
var formCaption = quizForm.children[1];

console.log(quizForm);



// Timer starts running when the user clicks the Start Quiz button on the form
function setTime(event) {
    event.preventDefault();
    displayQuestions();
    var timerInterval = setInterval(function() {
      timeLeft--;
      displayTime.textContent = timeLeft;
  
      if(timeLeft === 0) 
      {      
        clearInterval(timerInterval);    
      }
    }, 1000);
  }

  function displayQuestions(){
    formHeader.setAttribute("style", "display: none;");
    formCaption.setAttribute("style", "display: none;");
  }

  quizStartBtn.addEventListener("click", setTime); 

  

// var counter = document.querySelector("#counter");
// var startButton =document.querySelector('#startQuiz');
// var quizForm = document.querySelector("body");
// var myForm=document.getElementById("myForm");
// counter.textContent = 0;
// var qustionTag =document.createElement("h2");
// var answerOne=document.createElement("h4");
// var answerTwo=document.createElement("h4");
// var listEl = document.createElement("ul");
// var answerLi1=document.createElement("li");
// var answerLi2=document.createElement("li");
// var answerLi3=document.createElement("li");
// var timeEl = document.getElementById("time");
// // answerOne.textContent="javascript";
// // answerTwo.textContent="HTML";

// answerLi1.textContent="javascript";
// answerLi2.textContent="HTML";
// answerLi3.textContent="JQuery"


// // var count=localStorage.getItem("count");

// // counter.textContent =count;
// qustionTag.textContent="What is meant by CSS";
// myForm.appendChild(listEl);
// listEl.appendChild(answerLi1);
// listEl.appendChild(answerLi2);
// listEl.appendChild(answerLi3);

// var timeEl = document.querySelector(".time");
// var startButton = document.querySelector("#start");
// // console.log(startButton);
// // Selects element by id



// var secondsLeft = 100;

// startButton.addEventListener("click", setTime); 

// function setTime(event) {
//   event.preventDefault();
//   console.log("Bootcamp");
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
      
//     }

//   }, 50);
// }



// // startButton.addEventListener("click",function(event){
// //    event.preventDefault();
// //   // count++;
// //   // counter.textContent=count;
// //   // localStorage.setItem("count",count);

// //   // qustionTag = document.createElement("h2");
// //   document.body.appendChild(questionUl);
// //   document.body.appendChild(qustionTag);
  
  
// //   questionUl.appendChild(answerOne);
// //   document.body.appendChild(questionUl);
// //   // document.body.questionUl.appendChild(answerTwo);
// //   // document.body.appendChild(answerLiTwo);

// //   // body.appendChild(infoEl);

// // })
