import { getMeaning } from './apiGetter'
import { getKey } from './keyGetter'
import { polarityGet } from './scoreTag'
import { validateText } from './textValidate'

const handleSubmit = async (event) => {
    event.preventDefault()
    let formText = document.getElementById('article').value

    Client.analyzeText(formText);
}

const analyzeText = async (text) => {
    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
    const endTag = '&model=general&lang=en'

    const textURI = '&of=json&txt=' + encodeURI(formText)

    Client.validateText(formText)
    const apiKey = await Client.getKey()

    const meaningObj = await Client.getMeaning(baseURL, apiKey, textURI, endTag)

    console.log(meaningObj);
    const polarity = await Client.polarityGet(meaningObj.score_tag)

    Client.updateUI(polarity, meaningObj.agreement, meaningObj.subjectivity, meaningObj.confidence, meaningObj.irony)
}

function updateUI(polarity, agreement, subjectivity, confidence, irony) {
    document.getElementById('polarity').innerHTML = `Polarity:<span>${polarity}</span>`
    document.getElementById('agreement').innerHTML = `Agree or Disagree:<span>${agreement}</span>`
    document.getElementById('subjectivity').innerHTML = `Subjectivity:<span>${subjectivity}</span>`
    document.getElementById('confidence').innerHTML = `Confidence:<span>${confidence}&#37</span>`
    document.getElementById('irony').innerHTML = `Irony:<span>${irony}</span>`
}

export { validateText }
export { getKey }
export { getMeaning }
export { polarityGet }
export { handleSubmit }
