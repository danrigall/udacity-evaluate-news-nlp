// Import the js file to test
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import { handleSubmit } from "../src/client/js/formHandler"
import { validateText } from "../src/client/js/textValidate"
import { getKey } from "../src/client/js/keyGetter"
import { getMeaning } from "../src/client/js/apiGetter"
import { polarityGet } from "../src/client/js/scoreTag"
import { updateUI } from "../src/client/js/uiHandler"

describe("Testing the submit functionality", () => {

    test("Testing the 'handleSubmit' function", () => {
        const event = {preventDefault:jest.fn()}

        handleSubmit(event)
        expect(event.preventDefault).toHaveBeenCalledTimes(1)
    })
});
