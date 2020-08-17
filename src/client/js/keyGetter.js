const getKey = async () => {
    const response = await fetch('/key');
    try {
        const key = await response.text()
        console.log(key);
        return key
    } catch (error) {
        console.log("ERROR in GET: ", error)
    }
}

export { getKey }
