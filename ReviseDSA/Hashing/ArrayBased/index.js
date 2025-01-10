// Count frequency of each element in the array

const findNumberfrequency = (arr)=> {

    if(arr.length === 0 ){
        return  0
    }

    let max1 = Math.max(...arr);

    const hasHArray =  Array.from({ length: max1 + 1 }, () => 0);
    

    for (let i = 0; i<arr.length; i++){
        hasHArray[arr[i]] += 1
    }

    console.log("hasHArray", hasHArray);
   
    return hasHArray;
}


const arr = [10,5,10,15,10,5, 1, 1,2];

// console.log("Print array Elemenet repation count ===>>", findNumberfrequency(arr))


// const find Hashing Problem count nuber repeation in givien array;


const findduplicateNumberBasedonArray = (arr)=> {
    if(arr.le === 0){
        return {}
    }
    

}


const arr1 = [10,5,10,15,10,5, 1, 1,2];

const quer = [1, 4, 5, 2, 10];


console.log("Print findduplicateNumberBasedonArray count ===>>", findduplicateNumberBasedonArray(arr))