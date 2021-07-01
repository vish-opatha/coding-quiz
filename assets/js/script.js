var timeLeft = 100;
var displayTime = document.querySelector("#counter");
var quizStartBtn  = document.querySelector("#startQuiz");
var quizForm = document.querySelector(".quizMain");
var viewHighScore =document.body.children[0].children[0];

// Form header and caption on the main page
var formHeader = quizForm.children[0];
var formCaption = quizForm.children[1];

// Question and answer buttons
var question = document.createElement("h4");
var answerOne = document.createElement("button");
var answerTwo = document.createElement("butt");

var questionPool = [["What is a?","HYPER,TENSE,MARK,LANGUAGE",2],["How do you do thi?","CYBER,CRIME,SOLE,DEEP",2]];

// Timer starts running when the user clicks the Start Quiz button on the form
function setTime(event) {
    event.preventDefault();
    hidePageElements();
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
    

   
      var questionCaption = questionPool[0][0];
      var answers = questionPool[0][1];
      
    //  var correctAns=questionPool[[0][1]];

     question.textContent=questionCaption;
      // answerOne.innerHTML="Click";
      answerOne.innerHTML=answers;

     quizForm.appendChild(question);
      quizForm.appendChild(answerOne);


    
  }

  // This function is used to hide the elements when the quiz starts
  function hidePageElements(){
    formHeader.setAttribute("class", "hide-elements");
    formCaption.setAttribute("class", "hide-elements");
    viewHighScore.setAttribute("class", "hide-elements");
    quizStartBtn.setAttribute("class", "hide-elements");
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
