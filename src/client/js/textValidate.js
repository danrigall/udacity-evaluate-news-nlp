function validateText(text){
    const article = document.getElementById('article')
    if (text.length < 20) {
        article.classList.add('invalid')
        throw new Error('article must be at least 20 characters long')
        alert('Copied text must be at least 20 characters long')
    } else {
        article.classList.remove('invalid')
    }
}

export { validateText }
