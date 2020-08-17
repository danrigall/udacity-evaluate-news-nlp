import { getMeaning } from './apiGet'
import { getKey } from './keyGetter'

const handleSubmit = async (event) => {
    event.preventDefault()
    let formText = document.getElementById('name').value
    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
    const endTag = '&model=general&lang=en'

    const textURI = '&of=json&txt=' + encodeURI(formText)

    const key = await Client.getKey()

    const meaningObj = await Client.getMeaning(baseURL, key, textURI, endTag)

    document.getElementById('results').innerHTML = meaningObj.status.msg;
}

export { getKey }
export { getMeaning }
export { handleSubmit }
