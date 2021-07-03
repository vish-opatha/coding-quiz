var previousBtn = document.querySelector("#previousBtn");
var clearBtn = document.querySelector("#clearBtn");
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

 previousBtn.addEventListener("click",visitMainPage);
 clearBtn.addEventListener("click",clearHighScore);