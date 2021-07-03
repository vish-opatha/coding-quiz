var timeLeft = 100;
var displayTime = document.querySelector("#counter");
var quizStartBtn  = document.querySelector("#startQuiz");
var quizForm = document.querySelector(".quizMain");
var viewHighScore =document.body.children[0].children[0];

// Form header and caption on the main page
var formHeader = quizForm.children[0];
var formCaption = quizForm.children[1];

// Question and answer buttons
var questionPool = [["What is a?","HYPER","TENSE","MARK","LANGUAGE",2],
                    ["How do you do thi?","CYBER,CRIME,SOLE,DEEP",2]];
var questionCount = questionPool.length;
var question = document.createElement("h4");
var answerOne = document.createElement("button");
var indResult = document.createElement("div");
// var answerTwo = document.createElement("butt");

// Save user scores
var userScore = 0;
var pElement = document.createElement("p");
var letterPElement = document.createElement("p");
var submitBtn = document.createElement("button");
var nameTextB = document.createElement("input");


// 




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

  var i=0
  function displayQuestions(){
    
      var questionCaption = questionPool[i][0];
      var answers = questionPool[i][1];
      
    //  var correctAns=questionPool[[0][1]];
    // indResult.setAttribute("class","hide-elements");
     question.textContent=questionCaption;
      // answerOne.innerHTML="Click";
      answerOne.innerHTML=answers;
            quizForm.appendChild(question);
      quizForm.appendChild(answerOne);
      console.log ("i "+i+" questioncount"+questionCount);
      questionCount--;
      console.log ("i "+i+" questioncount"+questionCount);
      i++;
}
  // This function is used to display the result of the individual question
  function displayQuestionResult(event){
    event.preventDefault();
    // indResult.setAttribute("class","display-elements")
    indResult.textContent = "Correct ";
    quizForm.appendChild(indResult);
    
    userScore=timeLeft;
    //localStorage.setItem("marks", userScore);

    if(questionCount==0 || timeLeft==0)
    {
      
      // question.setAttribute("class","hide-elements");
      //  working code
      answerOne.setAttribute("class","hide-elements");
      indResult.setAttribute("Class","hide-elements");

      // question.textContent="All done. Your final score is "+ userScore;
      // letterPElement.innerHTML="Enter your initials ";

      // quizForm.appendChild(letterPElement); working code*/


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
     }, 1000);
      
    }

   

    
  }

  function saveUserScore(event){
    event.preventDefault();
    window.location.replace('view_highscore.html');
    var userMarks= {
      uName: nameTextB.value,
      marks: userScore
    };
    
    localStorage.setItem("uScore", JSON.stringify(userMarks));
    

    
    }
    
    
  

  // This function is used to hide the elements when the quiz starts
  function hidePageElements(){
    formHeader.setAttribute("class", "hide-elements");
    formCaption.setAttribute("class", "hide-elements");
    quizStartBtn.setAttribute("class", "hide-elements");
  }

 

  quizStartBtn.addEventListener("click", setTime); 
  answerOne.addEventListener("click",displayQuestionResult);
  submitBtn.addEventListener("click",saveUserScore);
  // 
  

