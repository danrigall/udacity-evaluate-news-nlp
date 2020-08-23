// Import the js file to test
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import { handleSubmit, validateText } from "../src/client/js/formHandler"
// import { getMeaning } from '../src/client/js/apiGetter'
// import { getKey } from '../src/client/js/keyGetter'
// import { polarityGet } from '../src/client/js/scoreTag'
// import { validateText } from '../src/client/js/textValidate'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the handleSubmit() function", () => {
        // Set up our document body
        document.body.innerHTML = `
            <section>
                <form class="" onsubmit="return Client.handleSubmit(event)">
                    <textarea id="article" type="text" name="input" value="" onblur="onBlur()" placeholder="Article Text"></textarea>
                    <input id="submit" type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
                </form>
            </section>

            <section id="evaluation">
                <strong>Evaluation</strong>
                <ul>
                    <li id="polarity"></li>
                    <li id="agreement"></li>
                    <li id="subjectivity"></li>
                    <li id="confidence"></li>
                    <li id="irony"></li>
                </ul>
            </section>
            `;
        // Set up Jest-mock
        fetch.mockResponse(() => validateText().then(res => 'ok'))

        const Client = {
            validateText: () => {
                // do whatever required here return true;
            }
        }
        const validateTextMock = (event, Client) => {
            // What goes here???
         }

        document.getElementById('article').value = 'It feels ridiculous to write a test for a function that already works, especially when it is harder to write the test.'
        const submitInput = document.getElementById('submit')

        // Define the expected output, if any, in the form of variables/array
        const domElementBuilt = document.getElementById('irony').innerHTML
        const click = submitInput.click()

        expect(handleSubmit(click)).toHaveBeenCalled();
        expect(domElementBuilt).resolves.toContain(String);
    })
});
