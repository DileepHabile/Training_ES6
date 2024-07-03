// Example -1 of Frequency counter approach in JS 
// Finding if 2 arrays similar 

function similar(ip1,ip2)
{
    if(ip1.length!==ip2.length)
        {
            return false;
        }
    let freqCounter1={};
    let freqCounter2={};

    // populating the frequenct counter object 
    for(let val of ip1){
        freqCounter1[val]=(freqCounter1[val] || 0)+1;
        // Handling the case when the frequency counter contains NULL,UNDEFINED
    }
    for(let val of ip2){
        freqCounter2[val]=(freqCounter2[val] || 0)+1;
    }

    // comparing the frequency of each key in both the frequency counters 
    for(let key in freqCounter1){
        if(!(key in freqCounter2)){
            return false
        }
        if(freqCounter2[key]!==freqCounter1[key]){
            return false;
        }
    }
    return true;
}