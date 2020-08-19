import { getMeaning } from '../src/client/js/apiGetter'

const dotenv = require('dotenv');
dotenv.config();

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the call to API", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Test 'getMeaning' function to make successful API call", () => {
        // Define the input for the function, if any, in the form of variables/array
        const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
        const apiKey = process.env.API_KEY
        const textURI = '&of=json&txt=' + encodeURI('This test is super lame, but should be fair.')
        const endTag = '&model=general&lang=en'

        // Define the expected output, if any, in the form of variables/array
        const output = "OK"
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(getMeaning(baseURL + apiKey + textURI + endTag)).resolves.toContain(output);
    })
});
