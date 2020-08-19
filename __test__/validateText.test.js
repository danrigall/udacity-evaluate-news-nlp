// Import the js file to test
import { validateText } from "../src/client/js/textValidate"

describe("Testing the text validity", () => {
    test("Testing the validateText() to throw on empty string", () => {
        document.body.innerHTML = `
            <form class="" onsubmit="return Client.handleSubmit(event)">
                <textarea id="article" type="text" name="input" value="" onblur="" title="paste article text here" placeholder="Article Text"></textarea>
                <input id="submit" type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
            </form>
        `;

        function emptyString() {
            validateText('')
        }

        expect(emptyString).toThrowError(/^article must be at least 20 characters long$/);
    })
});
