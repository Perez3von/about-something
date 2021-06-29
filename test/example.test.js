// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { isYes } from "../utils.js";

const test = QUnit.test;

test('time to test a function', assert => {
  
    const yesString = isYes('yes');
    assert.equal(yesString, true);
    
});
