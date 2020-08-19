import { getKey } from '../src/client/js/keyGetter'

const dotenv = require('dotenv');
dotenv.config();

describe("Testing the api key fetch from the server", () => {
    test("Test 'getKey' function to return api key", () => {
        const output = process.env.API_KEY

        expect(getKey()).resolves.toBe(output);
    })
});
