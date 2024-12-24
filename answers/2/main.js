 

// countMatchsticksInHouses

function countMatchsticksInHouses(num){
     if(num===0){
        return 0
     }else if(num>0){
        let result=(num*5)+1  
        console.log(result); 
        return result
        
     }
}


countMatchsticksInHouses()


// Time Regex

function timeRegex(text){
 if (!text){ 
    throw new Error("Text must be provided");
           }

  const timeRegex = /\b([01]?[0-9]|2[0-3]):[0-9][0-9]\b/;
  const match = text.match(timeRegex);

  console.log(match);
  
  return match
}


timeRegex('Hello everybody.Today breakfast at 12:44')


// findSecretWord 

function findSecretWord (text){

   const targetWord=text.match(/[a-z]/g);
   const result=targetWord.join('')
   console.log(result);

   return result
  
}

findSecretWord('hEeEERlEDQWElWDWQDQo')
// Person class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(otherPerson) {
    if (this.age < otherPerson.age) {
      return `${otherPerson.name} is older than me.`;
    } else if (this.age > otherPerson.age) {
      return `${otherPerson.name} is younger than me.`;
    } else {
      return `${otherPerson.name} is the same age as me.`;
    }
  }
}

const p1 = new Person("Samuel", 23);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);
 

// redundant Function

function redundantFunction(word){
   return function(){ 
      return word
   }
}

// redundantFunction(undefined)

 




