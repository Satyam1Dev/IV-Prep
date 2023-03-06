//Question 1
/***** Sorting an Array ******/

const bubbleSort = (arr) => { 
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      for(let j = 0; j < n-i-1; j++) {
        // console.log(n-i-1)
       if(arr[j] > arr[j+1]){
         let temp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = temp;
  
      }
      
    }
  }
  return arr
  
}
 console.log(bubbleSort([4,5,3,2,1]));

 // question 2

 /****** Sorting an Array[0,1,1,0,0,1] *******/

 const sortArray = (arr) => { 
let count=0;
for (let i=0; i<arr.length; i++) {
    if(arr[i] === 0){
        count++;
    }
}
for (let i=0; i<count; i++) {
    arr[i] =0
}
for (let i= count; i<arr.length; i++) {
    arr[i] =1
}
return arr
  }
  console.log(sortArray([0,1,1,0,0,1]));

  // question 3 please reverse the  given  string word by word order
  const str ="This is  javascript code"
  const arrOfStrings = str.split(" ")
  const reverseArr= arrOfStrings.map(item=>item.split(" ").reverse().join(" "))
  console.log(reverseArr)

