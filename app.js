// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const start_quiz_btn = document.getElementById('start-quiz-btn');


start_quiz_btn.addEventListener('click',sendAlert);


function sendAlert(){


  if(confirm("Ready to start quiz?")){

    console.log("Starting..")
    
   
    const question_one = prompt('Is blue greater than red?');
    const question_two = prompt('Is the derivative of 3x^2 equal to 6x?');
    const question_three = prompt('array of colors contains 3 elements?');
    const question_four = prompt('PI is not equal to 3.1514?');

   // console.log(question_one);
    //console.log(question_two);
    //console.log(question_three);
    //console.log(question_four);

    
  }
  else{

    console.log('not starting...')
  }



  }