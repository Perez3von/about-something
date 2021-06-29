// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { toSmallText} from "../utils.js";

const test = QUnit.test;

test('time to test a function', assert => {
  
    const actual = toSmallText('YES');
    const expected = 'yes';
    assert.equal(expected,actual);
    
});
