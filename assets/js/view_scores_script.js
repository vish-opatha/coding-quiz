var previousBtn = document.querySelector("#previousBtn");
var clearBtn = document.querySelector("#clearBtn");


 function visitMainPage(event){
    event.preventDefault();
    window.location.replace('index.html');
 }

 function clearHighScore(event){
     event.preventDefault();
     
 }

 previousBtn.addEventListener("click",visitMainPage);