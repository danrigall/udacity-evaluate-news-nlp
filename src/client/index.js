// Import js files from 'client'
import { validateText } from './js/textValidate'
import { getKey } from './js/keyGetter'
import { getMeaning } from './js/apiGetter'
import { handleSubmit } from './js/formHandler'
import { polarityGet } from './js/scoreTag'
import { updateUI } from './js/uiHandler'

// Import styles from 'client'
import './styles/resets.scss'
import './styles/main.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    validateText,
    getKey,
    getMeaning,
    polarityGet,
    updateUI,
    handleSubmit
}
