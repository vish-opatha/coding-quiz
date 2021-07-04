var timeLeft = 100;
var displayTime = document.querySelector("#counter");
var quizStartBtn  = document.querySelector("#startQuiz");
var quizForm = document.querySelector(".quizMain");
var viewHighScore =document.body.children[0].children[0];

// Form header and caption on the main page
var formHeader = quizForm.children[0];
var formCaption = quizForm.children[1];

// Questions and answer buttons
var questionPool = [["What does CSS stand for?","Current Style Sheets","Current Sheets Style",
                      "Cascading Style Sheets","Styled Sheets Style",3],
                    ["How to comment in the CSS code?","/* a comment */","// a comment //",
                      "/ a comment /","<' a comment'>",1],
                    ["What does HTML stand for?","HighText Machine Language","HyperText Markup Language",
                      "HyperText and links Markup Language","None of the above",2]];

var questionCount = questionPool.length;
var question = document.createElement("h4");
var answerOne = document.createElement("button");
var answerTwo = document.createElement("button");
var answerThree = document.createElement("button");
var answerFour = document.createElement("button");
var correctAnswer=0;
var answerList = document.createElement("ul");
var indResult = document.createElement("div");

// Save user scores
var userScore = 100;
var letterPElement = document.createElement("p");
var submitBtn = document.createElement("button");
var nameTextB = document.createElement("input");

var timerInterval = null;
var scoreList = [];
 




// Timer starts running when the user clicks the Start Quiz button on the form
function setTime(event) {
    event.preventDefault();
    hidePageElements();
    displayQuestions();
    timerInterval = setInterval(function() {
      userScore--;
      displayTime.textContent = userScore;
  
      if(userScore === 0) 
      {      
        clearInterval(timerInterval);    
      }

    }, 1000);
  }

  var i=0
  var displayQu =document.querySelector(".displayQuiz");
  function displayQuestions(){
      //event.preventDefault();
      var questionCaption = questionPool[i][0];
      var answer1 = questionPool[i][1];
      var answer2 = questionPool[i][2];
      var answer3 = questionPool[i][3];
      var answer4 = questionPool[i][4];
      correctAnswer = questionPool[i][5];
    
      question.textContent = questionCaption;
      answerOne.innerHTML = answer1;
      answerOne.setAttribute("ans-option", "1");
      answerTwo.innerHTML = answer2;
      answerTwo.setAttribute("ans-option", "2");
      answerThree.innerHTML = answer3;
      answerThree.setAttribute("ans-option", "3");
      answerFour.innerHTML = answer4;
      answerFour.setAttribute("ans-option", "4");
    
      quizForm.appendChild(answerList);
      answerList.appendChild(question);
      answerList.appendChild(answerOne);
      answerList.appendChild(answerTwo);
      answerList.appendChild(answerThree);
      answerList.appendChild(answerFour);
      i++
      questionCount--;
      

      

      
     

}
 
var ansDisplay = document.querySelector(".displayAnswer");
  function displayQuestionResult(event){
    event.preventDefault();
    var element=event.target;

    if (element.matches('button') === true)
    {
      var optionValue =element.getAttribute("ans-option");
      if(optionValue == correctAnswer)
      {
        userScore=userScore;
        indResult.textContent = "Correct✔️ ";
        ansDisplay.appendChild(indResult);
      }

      else{
        userScore=userScore-10;
        displayTime.innerHTML=userScore;
        indResult.textContent = "Incorrect ";
        ansDisplay.appendChild(indResult);
      }
    }



    if(questionCount==0 || timeLeft==0)
    {
         //####### ADDED NEW #########
        //###########################
      clearInterval(timerInterval);
      setTimeout(function() {
      answerOne.setAttribute("class","hide-elements");
      answerTwo.setAttribute("class","hide-elements");
      answerThree.setAttribute("class","hide-elements");
      answerFour.setAttribute("class","hide-elements");
      indResult.setAttribute("Class","hide-elements");
    }, 800);


      setTimeout(function() {
      question.textContent="All done. Your final score is "+ userScore;
      letterPElement.innerHTML="Enter your initials ";
      submitBtn.innerHTML="Submit";
      nameTextB.setAttribute("type","text");
      nameTextB.setAttribute("id","userName");

      quizForm.appendChild(letterPElement);
      quizForm.appendChild(nameTextB);
      quizForm.appendChild(submitBtn);

     }, 800);

      
      
    }

    else{
      setTimeout(function() {
        displayQuestions();
     }, 800);
      
    }

   

    
  }

  function saveUserScore(event){
    event.preventDefault();
    window.location.replace('view_highscore.html');
    var userMarks= {
      uName: nameTextB.value,
      marks: userScore
    };
    scoreList = JSON.parse(localStorage.getItem("uScore"));
    scoreList.push(nameTextB.value+" "+userScore);
    
    // localStorage.setItem("uScore", JSON.stringify(userMarks));
    localStorage.setItem("uScore", JSON.stringify(scoreList));
        
    }

   
    
    
  

  // This function is used to hide the elements when the quiz starts
  function hidePageElements(){
    formHeader.setAttribute("class", "hide-elements");
    formCaption.setAttribute("class", "hide-elements");
    quizStartBtn.setAttribute("class", "hide-elements");
  }

 

  quizStartBtn.addEventListener("click", setTime); 
  answerList.addEventListener("click",displayQuestionResult);
  submitBtn.addEventListener("click",saveUserScore);
  // 
  


