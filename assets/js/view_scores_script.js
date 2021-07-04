var previousBtn = document.querySelector("#previousBtn");
var clearBtn = document.querySelector("#clearBtn");
var listItem = document.querySelector("#score-list");
var scoreList = [];

//#######  Function to go back to index.html page  ##########
function visitMainPage(event)
{
    event.preventDefault();
    window.location.replace('index.html');
}

 //#######  Function to clear scores in local storage ##########
function clearHighScore(event)
{
   event.preventDefault();
   var existingList = localStorage.getItem("uScore");
   if (existingList == null)
   {
      return;
   }

   else
   {
      localStorage.removeItem("uScore");
      listItem.innerHTML="";
   }      
 }

//#######  Function to get scores in the local storage ##########
function renderHighScores()
{
   var scoreItems = [];
   scoreItems=JSON.parse(localStorage.getItem("uScore"));
   if(scoreItems!==null)
   {
      var i=scoreItems.length;
      for(j=0;j<i;j++)
      {
         var lItem=document.createElement("li");
         lItem.innerHTML=scoreItems[j];
         listItem.appendChild(lItem);
      }
   }

   else
   { 
      return;
   }
}

//#######  Init function on page load ########## 
function init()
{
   renderHighScores(); 
}

init();
previousBtn.addEventListener("click",visitMainPage);
clearBtn.addEventListener("click",clearHighScore);
