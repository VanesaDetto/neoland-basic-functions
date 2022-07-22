//ITERACION #1//
  const sum=(numberOne, numberTwo)=>{
     let highestNumber = numberOne > numberTwo ? numberOne :  numberTwo;
     return highestNumber;
  }
  sum(1,2);
  console.log(sum(1,2));

//ITERACION #2//
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(list) {
  let longestWord ="";
  list.forEach(element => {
    longestWord = element.length >longestWord.length? element : longestWord;
  });
  return longestWord
}
console.log(findLongestWord(avengers));

//ITERACION #3//

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(list) {
  let total = 0;
  for (element of list){
      total += element;
   }
   return total;
  }
 console.log(sumAll(numbers));

//ITERACION #4//

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(list) {
  let total = 0;
  for (element of list){
      total += element ;      
   }
   return total / list.length;
  }
   
console.log(average(numbers2));

//ITERACION #5//


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(list) {
  let total2=0;
  list.forEach((element)=>{
    if(typeof element==="number"){
        total2+=element;
    }else if(typeof element==="string"){
            total2+=element.length
    }else{
      console.log("Hasta Luego")
    }
  })
  
    return total2
}
  console.log(averageWord(mixedElements))

//ITERACION #6//

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
   let unicos= [];
   list.forEach((element)=>{
        if(!unicos.includes(element)){
          unicos.push(element)
        }
   })
   console.log(unicos)
}

removeDuplicates(duplicates)

//ITERACION #7//

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(list,text) {
  let almacenIndex = list.indexOf(text);
  if(almacenIndex==-1){
    return false;
  }else{
    return true,almacenIndex;
  } 
}
 console.log(finderName(nameFinder,"Peggy"));

//ITERACION #8//

 const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function removeDuplicates2(list) {
  
  let unicos2= [];
  let repeticiones=[];
  
  list.forEach((element)=>{
    if(!unicos2.includes(element)){
         unicos2.push(element)
       }
  })
}  
  
  let contador =0;
  
  unicos2.forEach((repeticiones) => {
    list.forEach((repeticionesDos)=>{
          if(repeticiones==repeticionesDos){
            contador ++;
          };
    }); repeticiones.push(repeticiones + "  " + contador);
        
  });return repeticiones;


 console.log(removeDuplicates2(counterWords))

