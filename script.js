//Declaring 10 array of objects 

let question = [
  {
    name: "What is the hottest planet in our solar system?",
    option: [
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false }
    ]
  },
  {
    name: "Which Indian state is known as the 'Spice Coast'?",
    option: [
      { text: "Tamil Nadu", correct: false },
      { text: "Gujarat", correct: true },
      { text: "West Bengal", correct: false },
      { text: "Andhra Pradesh", correct: false }
    ]
  },
  {
    name: "The largest international organization in the world is:",
    option: [
      { text: "United Nations", correct: true },
      { text: "World Trade Organization", correct: false },
      { text: "European Union", correct: false },
      { text: "North Atlantic Treaty Organization (NATO)", correct: false }
    ]
  },
  {
    name: "What is the largest artificial structure in the solar system?",
    option: [
      { text: "International Space Station (ISS)", correct: true },
      { text: "Great Wall of China", correct: false },
      { text: "Panama Canal", correct: false },
      { text: "Burj Khalifa", correct: false }
    ]
  },
  {
    name: "Which Indian political party adopted the symbol of a hand?",
    option: [
      { text: "Bharatiya Janata Party (BJP)", correct: false },
      { text: "Indian National Congress (INC)", correct: true },
      { text: "Aam Aadmi Party (AAP)", correct: false },
      { text: "Shiv Sena", correct: false }
    ]
  },
  {
    name: "The world's most populous country is:",
    option: [
      { text: "India", correct: true },
      { text: "China", correct: false },
      { text: "United States", correct: false },
      { text: "Indonesia", correct: false }
    ]
  },
  {
    name: "What is the name of the first Indian satellite launched in 1975?",
    option: [
      { text: "Aryabhatta", correct: true },
      { text: "Chandrayaan-1", correct: false },
      { text: "Mangalyaan", correct: false },
      { text: "GSAT-1", correct: false }
    ]
  },
  {
    name: "The Kyoto Protocol is an international treaty that aims to:",
    option: [
      { text: "Reduce greenhouse gas emissions", correct: true },
      { text: "Promote global trade", correct: false },
      { text: "Ban the use of nuclear weapons", correct: false },
      { text: "Establish a global space agency", correct: false }
    ]
  },
  {
    name: "Which Indian state is known as the 'Land of Rising Sun'?",
    option: [
      { text: "Kerala", correct: false },
      { text: "Punjab", correct: true },
      { text: "Assam", correct: false },
      { text: "Odisha", correct: false }
    ]
  },
  {
    name: "The group of 20 major economies is known as:",
    option: [
      { text: "G20", correct: true },
      { text: "BRICS", correct: false },
      { text: "ASEAN", correct: false },
      { text: "OPEC", correct: false }
    ]
  }
];

//getting id and classes from HTML for dom 
var nextbutton = document.getElementById("next-btn");
var prevbutton=document.getElementById("prev-btn")
let restartButton=document.querySelector(".restart")
let result = document.getElementById("result");

//Initializing the value to variable according to logic
let count = 0;
let currentquestion_index = 0;
let question_Number=1;


// Event listener for next button
nextbutton.addEventListener("click", function nextquestion() {

    if (currentquestion_index < question.length - 1) {
        currentquestion_index++;//increment the  currentquestion_index value whenver the next button clicked 
        question_Number++;

        showquestion(currentquestion_index,question_Number,);//calling the function
        restartButton.classList.add("restart")
       
    }
    //changing the name for next button equal to submit when the question is last
    if(currentquestion_index==question.length-1){
        nextbutton.addEventListener("click",function(){
          result.innerHTML= " "+"Your Score is ="+count;
     result.classList.add("resultanimation")
          restartButtonanimation()//calling function without parameter
          result.classList.add("result")

          prevbutton.disabled=true;

        })
      }
            
});


// Function to display current question
function showquestion(index,Question_Num,questionElement) {
    var optionsElement = document.getElementById("options");
    var questionElement = document.getElementById("question");

let questposition=document.querySelector(".questionno");

    let ques = question[index];
    
     if(currentquestion_index==question.length-1){
      displayresult();
      
     }
    questposition.textContent=Question_Num;

    questionElement.innerHTML = ")"+ques.name;


    optionsElement.innerHTML = ""; // Clear previous options
    questionanimation(questionElement);
//iterate each text key in optins key as array
    ques.option.forEach((element, i) => {
        let opt = element.text;
        var button = document.createElement("button");
        button.innerHTML = element.text;
        optionsElement.appendChild(button);
// adding event listner for each option to mark score
        button.addEventListener("click", function() {
            if (element.correct) {
                count++;
                button.classList.add("btncolor");
               button.classList.remove("no")
                console.log("Count:", count);
               button.classList.add("animationbutton")

            } else {
                button.classList.add("btncolorwrong");
               button.classList.add("animationbutton")

            }
            // Disable buttons after selection
            optionsElement.querySelectorAll("button").forEach(btn => {
                btn.disabled = true;
            });
        });
    });
}

// Call showquestion to display the initial question
showquestion(currentquestion_index,question_Number);

//  function for previous button 
prevbutton.addEventListener("click",function prevQuestion() {
    if (currentquestion_index > 0) {
        currentquestion_index--;
        question_Number--;
        showquestion(currentquestion_index,question_Number);

   var optionsElement = document.getElementById("options"); // Get the element here
        showquestion(currentquestion_index, question_Number);

        optionsElement.querySelectorAll("button").forEach(btn => {

        
          btn.disabled = true;
      
    }
  
    }
)
//function for changing name in the next buttton
function displayresult(){
  nextbutton.textContent="submit"
  
}
//function display Restart_button 
function restartButtonanimation(){
  restartButton.classList.remove("restart");

}
// for reloading the page and also start quiz
restartButton.addEventListener("click",function(){

  location.reload()

})
//function for animation of question 
function questionanimation(element){
  element.classList.add("animation")


}
