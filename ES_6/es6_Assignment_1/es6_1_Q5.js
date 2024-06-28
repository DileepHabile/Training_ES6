async function fetchData() {
    const apiUrl = 'https://api.example.com/data';

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
}


async function fetchAndLogData() {
    try {
        const result = await fetchData(); 
        console.log(result);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchAndLogData();
