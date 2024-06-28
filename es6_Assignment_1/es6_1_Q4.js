
async function fetchData2(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; 

    try {
        const resp = await fetch(apiUrl);
        if (!resp.ok) {
            throw new Error('Failed to fetch data');
        }
        return await resp.json();
    } catch (error) {
        throw error; 
    }
}

async function fetchAndLogData() {
    try {
        const result = await fetchData2(); 
        console.log(result);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}


fetchAndLogData();
