// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

import { toSmallText, facts_list } from './utils.js';


//DOM elements pulled
const start_quiz_btn = document.getElementById('start-quiz-btn');
const my_facts = document.getElementById('facts-list');
const results_section = document.getElementById('results-section');
const get_facts = document.getElementById('get-facts');
const wow_audio = document.getElementById('wow-audio');
const hello_audio = document.getElementById('hello-audio');
const sad_emoji = document.getElementById('sad-emoji');
const wow_emoji = document.getElementById('wow-emoji');

//get the data to play game
get_facts.addEventListener('click', addFactListElements);

//start quiz prompting..
start_quiz_btn.addEventListener('click', startGame);


//Had to inialize after creating the arr-object
const arr_length = facts_list.length;


//create and add li element for each question on page load based on the number of elements in the CONST ARR VARIABLE

function addFactListElements(){

    for (var i = 0;i < arr_length;i++){
//create an Li tag eleemnt
        var x = document.createElement('LI');
//create a node with text corresponding to a fact
        var t = document.createTextNode(facts_list[i].fact);
//combine text node to its parent Li element
        x.appendChild(t);
//combine Li element to the section element that already existed on the page
        my_facts.appendChild(x);

    }
//hide get facts button
    get_facts.style.display = 'none';
//show start quiz after facts have been displayed
    start_quiz_btn.style.visibility = 'visible';
    
}


function startGame(){
//hide start quiz button so they must refresh page to re-try
    start_quiz_btn.style.visibility = 'hidden';

    if (confirm('Ready to start quiz?')){

        //console.log('Starting..');
        results_section.style.visibility = 'visible';
        
        
        let counter = 0;
//sends out prompt + questions and counts number of correct answers
        for (var j = 0; j < arr_length;j++){

            let user_input = prompt(facts_list[j].question);
//if user input matches one of the answers for the current object, add one to counter
            if (toSmallText(user_input) === facts_list[j].answer[0] || toSmallText(user_input) === facts_list[j].answer[1]){
                
                counter++;
            }
        }
//calc percentage based on answers correct
        let percentage = (counter / arr_length) * 100;
//if percent is passing play fun sound
        if (Math.round(percentage) >= 60){
          
            wow_audio.play();
            wow_emoji.style.display = 'block';
         
        }
        //if percent is fail, play darkness sound
        else {

            hello_audio.play();
            sad_emoji.style.display = 'block';
        
        }
//display correct number of answers on the html 
        results_section.innerText = `You got ${counter} out of ${arr_length} correct.`;
        
   
    }
    else {

        alert('Cancelling...');
        //console.log('not starting...');
    }



}

