// Import the js file to test
import { polarityGet } from '../src/client/js/scoreTag'

describe("Testing the functionality of polarity interpretation", () => {
    test("Testing the polarityGet() function", () => {
        const input = 'P'
        const output = 'Fairly Positive'
        expect(polarityGet(input)).resolves.toBe(output);
    })
});
