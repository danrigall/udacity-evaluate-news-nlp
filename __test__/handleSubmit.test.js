// Import the js file to test
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import { handleSubmit } from "../src/client/js/formHandler"
import { validateText } from "../src/client/js/textValidate"
import { getMeaning } from "../src/client/js/apiGetter"
import { getKey } from "../src/client/js/keyGetter"
import { polarityGet } from "../src/client/js/scoreTag"
import { updateUI } from "../src/client/js/uiHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the 'handleSubmit' function", () => {

        // Set up our document body
        document.body.innerHTML = `
            <button id="submit">Submit</button>
            `;

        // Set up mock for 'Client'
        const Client = jest.fn();

        // Mock 'click' event
        const submitInput = document.getElementById('submit')
        const event = submitInput.click()
        const mockHandleSubmit = jest.fn(handleSubmit())
        handleSubmit(event)
        expect(mockHandleSubmit).toHaveBeenCalledWith(submitInput.simulate('click'));
    })
});
