var displayTime = document.querySelector("#counter");
var quizStartBtn  = document.querySelector("#startQuiz");
var quizForm = document.querySelector(".quizMain");
var quizCaption =document.querySelector("#quiz-header");

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
var answerList = document.querySelector(".displayQuiz");
var ansDisplay = document.querySelector(".displayAnswer");
var indResult = document.createElement("p");

var scoreTime = 50;

var submitBtn = document.createElement("button");
var nameTextB = document.createElement("input");

var timerInterval = null;
var i=0; 

//############ Function to start the quiz and the timer ############
function setTime(event) 
{
  event.preventDefault();
  hidePageElements();
  displayQuestions();

  timerInterval = setInterval(function() 
  {
    scoreTime--;
    displayTime.textContent = scoreTime;
    if(scoreTime === 0) 
    {      
      clearInterval(timerInterval);    
    }
  }, 1000);
}

//############ Function to display questions from the question pool ############
function displayQuestions()
{
  indResult.textContent = "";
    
  question.innerHTML = questionPool[i][0];
  answerOne.innerHTML = "1. "+ questionPool[i][1];   answerOne.setAttribute("ans-option", "1");
  answerTwo.innerHTML = "2. "+ questionPool[i][2];   answerTwo.setAttribute("ans-option", "2");
  answerThree.innerHTML ="3. "+ questionPool[i][3];  answerThree.setAttribute("ans-option", "3");
  answerFour.innerHTML = "4. "+ questionPool[i][4];  answerFour.setAttribute("ans-option", "4");
  correctAnswer = questionPool[i][5];

  question.setAttribute("class","left-align");

  answerList.appendChild(question);
  answerList.appendChild(answerOne);
  answerList.appendChild(answerTwo);
  answerList.appendChild(answerThree);
  answerList.appendChild(answerFour);

  i++;
  questionCount--;
}

//############ Function to display the if the answer is correct or wrong ############
function displayQuestionResult(event)
{
  event.preventDefault();
  var element = event.target;

  // When the user click any button with answers
  if (element.matches('button') === true)
  {
    var optionValue =element.getAttribute("ans-option");
    if(optionValue == correctAnswer)
    {
      if(scoreTime<10)
      {
        displayTime.innerHTML=0
      }
      else
      {
        scoreTime=scoreTime;
        indResult.textContent = "Correct ✔️";
        ansDisplay.appendChild(indResult);
      }      
      
    }

    else
    {
      scoreTime=scoreTime-10;
      if(scoreTime<10)
      {
        displayTime.innerHTML=0
      }
      else
      {
        displayTime.innerHTML=scoreTime;
        indResult.textContent = "Incorrect ❌";
        ansDisplay.appendChild(indResult);
      }      
    }
  }

  // If the user has answered all the question given or the time is over
  if(questionCount==0 || scoreTime==0)
  {
    clearInterval(timerInterval);
   
    setTimeout(function() 
    {
      answerList.setAttribute("class","hide-elements");
      indResult.setAttribute("Class","hide-elements");
    }, 800);

    setTimeout(function() 
    {
      var headerFour= document.createElement("h4");
      var letterPElement = document.createElement("label");
      headerFour.textContent="All done. Your final score is "+ scoreTime +".";
      letterPElement.innerHTML="Enter your initials ";

      submitBtn.innerHTML="Submit";
      nameTextB.setAttribute("type","text");
      nameTextB.setAttribute("id","userName");

      ansDisplay.setAttribute("class","final-marks-display");

      ansDisplay.appendChild(headerFour);
      ansDisplay.appendChild(letterPElement);
      ansDisplay.appendChild(nameTextB);
      ansDisplay.appendChild(submitBtn);
    }, 800);
  }

  else
  {
    setTimeout(function()
    {
      displayQuestions();
    }, 800);
  }
}

//############ Function to save score in the local storage ############
function savescoreTime(event)
{
  event.preventDefault();
  window.location.replace('view_highscore.html');

  var scoreList = [];   
  var existingList = JSON.parse(localStorage.getItem("uScore"));
  
  if (existingList == null) 
  {
    scoreList.push(nameTextB.value+" - "+scoreTime)
    localStorage.setItem("uScore", JSON.stringify(scoreList));
  }
 
  else 
  {
    scoreList=JSON.parse(localStorage.getItem("uScore"));
    scoreList.push(nameTextB.value+" - "+scoreTime)
    localStorage.setItem("uScore", JSON.stringify(scoreList));
  }        
}

//############ Function to hide the elements when the quiz starts ############
function hidePageElements()
{
  quizCaption.setAttribute("class", "hide-elements");
  quizStartBtn.setAttribute("class", "hide-elements");
}

quizStartBtn.addEventListener("click", setTime); 
answerList.addEventListener("click",displayQuestionResult);
submitBtn.addEventListener("click",savescoreTime);
 
  


