function updateUI(polarity, agreement, subjectivity, confidence, irony) {
    document.getElementById('polarity').innerHTML = `Polarity:<span>${polarity}</span>`
    document.getElementById('agreement').innerHTML = `Agree or Disagree:<span>${agreement}</span>`
    document.getElementById('subjectivity').innerHTML = `Subjectivity:<span>${subjectivity}</span>`
    document.getElementById('confidence').innerHTML = `Confidence:<span>${confidence}&#37</span>`
    document.getElementById('irony').innerHTML = `Irony:<span>${irony}</span>`
}

export { updateUI }
