import { updateUI } from '../src/client/js/uiHandler'

describe("Testing the UI updates correctly", () => {
    // Set up DOCUMENT
    document.body.innerHTML = `
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

    test("Test 'updateUI': ", () => {
        updateUI("P", "AGREE", "SUBJECTIVE", "100", "NONIRONIC")

        const polarity = document.getElementById('polarity')
        expect(polarity.innerHTML).toEqual('Polarity:<span>P</span>');
    })
});
