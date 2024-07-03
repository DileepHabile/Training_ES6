// Write an async function that fetches data from multiple endpoints in parallel:
// https://api.example.com/data1
// https://api.example.com/data2 Ensure that the function waits for all requests to complete and collects all the results before returning.

const fetchDataFromMultiple = async () => {
    const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
    const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
    try {
        const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)]);
        if (!response1.ok) {
            throw new Error(`Failed to fetch data from ${url1}, status ${response1.status}`);
        }
        if (!response2.ok) {
            throw new Error(`Failed to fetch data from ${url2}, status ${response2.status}`);
        }
        const response3 = fetch(url1)
        const response4 = fetch(url2)

        const data1 = await response1.json();
        const data2 = await response2.json();
        return { data1, data2 };
    } catch (error) {
        throw new Error(`Error fetching Data ${error.messsage}`)
    }

}


fetchDataFromMultiple()
    .then(results => {
        console.log('Data from endpoint 1:', results.data1);
        console.log('Data from endpoint 2:', results.data2)
    })
    .catch(error => {
        console.error('Error in fetching data:', error);
    });
