// Write a function that performs three asynchronous tasks sequentially using async/await:


// Task 1: Fetch data from https://api.example.com/task1.
async function fetchData(){
    const url1= 'https://jsonplaceholder.typicode.com/todos/';
    try{
        const response=await fetch(url1);
        if(!response.ok){
            throw new Error(`HTTP error : ${response.status}`)
        }

        const  data=await response.json();
        return data ;
    }catch(error)
    {
        throw new Error( 'Error Message: ${error.message}');
    }

}

// Task 2: Process the data (e.g., filter or transform it).
function processData(data){
   try {
    const filteredData=data.filter(item=>item.id<10)
    return filteredData;
   } catch (error) {
       throw new Error(`Error Processing Data : ${error.message}`)
   }
}

// Task 3: Post the processed data to https://api.example.com/task3. 
//Ensure each task waits for the previous one to complete before proceeding.

async function submittingData(){
 try {
    const url2='https://httpbin.org/post';
    const submit=await fetch(url2, { method: 'POST' });
    if(!submit.ok){
        throw new Error('Failed to post the Processed Data ${submit.status}')
    }
    console.log('All tasks are completed successfully')
 } catch (error) {
    throw new Error('Error during submission: ,${error.message}')
 }
}

// In all the above async functions we are just trying to return the data or error whichever returned 
// In the last async function that is executing we are trying to console the outputs
async function doIt(){
    try {
        const data=await fetchData();
        const result=processData(data);
        console.log(result)
        const resend=await submittingData(result);
    } catch (error) {
        console.error(error.message);
    }
}
// gir checking

doIt();