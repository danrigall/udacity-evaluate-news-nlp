import { getKey } from '../src/client/js/keyGetter'

const dotenv = require('dotenv');
dotenv.config();

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the api key fetch from the server", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Test 'getKey' function to return api key", () => {
         // Define the input for the function, if any, in the form of variables/array

        // Define the expected output, if any, in the form of variables/array
        const output = process.env.API_KEY
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(getKey()).resolves.toBe(output);
    })
});
