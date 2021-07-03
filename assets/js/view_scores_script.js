var previousBtn = document.querySelector("#previousBtn");
var clearBtn = document.querySelector("#clearBtn");
var listItem = document.querySelector("#score-list")
var scoreList = [];

 function visitMainPage(event){
    event.preventDefault();
    window.location.replace('index.html');
 }

 // Clear local storage
 function clearHighScore(event){
     event.preventDefault();

     var existingList = localStorage.getItem("uScore");
     console.log(existingList);

    if (existingList == null) {
        return;
    }

    else {
        localStorage.removeItem("uScore");
    }      
 }


 function init()
 {
   var savedMarks =JSON.parse(localStorage.getItem("userMarks"));
   console.log(savedMarks);

var userName =savedMarks["uName"];
 var marks = savedMarks["marks"];

   var liElement =document.createElement("li");
    // liElement.textContent="Vish";
  liElement.textContent = userName+ " "+marks;
   listItem.appendChild(liElement);

 }

//  function init() {
//     // Get stored todos from localStorage
//     var storedScore = JSON.parse(localStorage.getItem('todos'));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedTodos !== null) {
//       todos = storedTodos;
//     }
  
//     // This is a helper function that will render todos to the DOM
//     renderTodos();
//   }
 init();
 previousBtn.addEventListener("click",visitMainPage);
 clearBtn.addEventListener("click",clearHighScore);