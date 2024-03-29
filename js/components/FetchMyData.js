const FetchMyData = async({ Endpoint }) => {
    const startUrl = "https://modelin.webexam-mcdm.dk/api/"
    const url = `${startUrl}${Endpoint}`;

    const fetchMyData = new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((result) => resolve(result))
            .catch((err) => {
                reject(err);
            });
    });
    return (fetchMyData);
}

export default FetchMyData;