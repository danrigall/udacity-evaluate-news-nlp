import { getMeaning } from '../src/client/js/apiGetter'

const dotenv = require('dotenv');
dotenv.config();

import fetch, { Response } from 'node-fetch';
jest.mock('node-fetch');

describe("Testing the call to API", () => {

    test("Test 'getMeaning' function to make successful API call", async () => {

        const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
        const apiKey = process.env.API_KEY
        const textURI = '&of=json&txt=' + encodeURI('This test is super lame, but should be fair.')
        const endTag = '&model=general&lang=en'

        await getMeaning(baseURL, apiKey, textURI, endTag)
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(baseURL + apiKey + textURI + endTag);
    })
});
