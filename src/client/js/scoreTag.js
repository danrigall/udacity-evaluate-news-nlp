const polarityGet = async (polarity) => {
    let text = ''
    switch (polarity) {
        case 'P+':
            text = 'Strongly Positive'
            break;
        case 'P':
            text = 'Fairly Positive'
            break;
        case 'NEU':
            text = 'Neutral'
            break;
        case 'N':
            text = 'Negative'
            break;
        case 'N+':
            text = 'Strongly Negative'
            break;
        case 'NONE':
            text = 'Without Sentiment'
            break;
        default:
            text = "No sentiment found..."
    }
    return text;
}

export { polarityGet }
