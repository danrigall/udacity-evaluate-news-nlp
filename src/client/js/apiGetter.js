const getMeaning = async (baseURL, key, text) => {
    const response = await fetch(baseURL + key + text);
    try {
        const allData = await response.json()
        return allData;
        console.log(allData);
    } catch (error) {
        console.log("ERROR in API call: ", error)
    }
}

export { getMeaning }
