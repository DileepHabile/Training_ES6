
async function fetchData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; 
    try {
        const resp = await fetch(apiUrl);
        if (!resp.ok) {
            throw new Error('Failed to fetch data');
        }
         const data= await resp.json();
         console.log (data);
    } catch (error) {
        throw error; 
    }
}

fetchData();

//  doubt -- what if i want to store it in a variable and then print it whenever i need 
