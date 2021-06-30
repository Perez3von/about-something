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

//get the data to play game
get_facts.addEventListener('click', addFactListElements);

//start quiz prompting..
start_quiz_btn.addEventListener('click', startGame);


//Had to inialize after creating the arr-object
const arr_length = facts_list.length;


//create and add li element for each question on page load

function addFactListElements(){

    for (var i = 0;i < arr_length;i++){

        var x = document.createElement('LI');

        var t = document.createTextNode(facts_list[i].fact);

        x.appendChild(t);

        my_facts.appendChild(x);

    }

    get_facts.style.display = 'none';
    start_quiz_btn.style.visibility = 'visible';
    
}


function startGame(){


    if (confirm('Ready to start quiz?')){

        //console.log('Starting..');
        results_section.style.visibility = 'visible';
        
        let counter = 0;

        for (var j = 0; j < arr_length;j++){

            let user_input = prompt(facts_list[j].question);

            if (toSmallText(user_input) === facts_list[j].answer[0] || toSmallText(user_input) === facts_list[j].answer[1]){
                
                counter++;
            }

            results_section.innerText = `You got ${counter} out of ${arr_length} correct.`;

        }
   
    }
    else {

        alert('Cancelling...');
        //console.log('not starting...');
    }



}