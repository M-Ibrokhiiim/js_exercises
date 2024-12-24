 


// isStringEmpty

function isStringEmpty(text){
    if(text===undefined){
     throw new Error('text must be defined')
    } 
    
  }
  
 
 // truncateString
 const variable=null;
  function truncateString(text){
    if(text===undefined){
    return 'Please specify number of characters to extract'
    }else if(text===null){
     throw new Error("text must have at least one character");
    }
  
    console.log(text.slice(0,2));
    
    return text.slice(0,2)
 }
 
 truncateString('Hello worlds')
 
 
 
 // createHashTag
 function createHashTag(text){
   if(text===null ||text==='' || text===undefined){  
         throw new Error('Text should have at least three characters')
     } 
     
     return `#${text}`.toLowerCase().replace(/\s+/g, '')
 }
 
 
 
 
 
 // formatPhoneNumber
 
 
 
  
 function formatPhoneNumber(phoneNumber) {
          
     if(phoneNumber.toString().length<9 || phoneNumber.toString().length>12){
        throw new Error('Phone number must be either 9 or 12 characters long')
     } 
     let pendingNumber=`+998${phoneNumber.toString().slice(0,2)} ${phoneNumber.toString().slice(2,5)} ${phoneNumber.toString().slice(5,7)} ${phoneNumber.toString().slice(7,9)}`    
     return pendingNumber
 }
 
 
 
 // changeTextCase
 
 
 let phrase='Ibrokim Muysinov';
 let cases='camel'
 
 function changeTextCase(text, caseType) {
     if (!text || !caseType) {
         throw new Error('Text and caseType are required');
     }
     
     
     let words = text.toLowerCase().split(' ');
 
     switch (caseType.toLowerCase()) {
         case 'camel':  
          const camelCase= words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
             return camelCase
         case 'kebab':
          const kebabCase=words.join('-');
             // console.log(kebabCase);
             return kebabCase
         case 'snake':
             
          const snakeCase= words.join('_');
             // console.log(snakeCase);
             return snakeCase
         
         default:
             throw new Error('Invalid caseType. Use "camel", "kebab", or "snake".');
     }
 }
 
 
 changeTextCase(phrase,cases)
 
 
 
 
 
 // replaceWordInText-I did not do that
   


 

 // extractPriceFromText
 
 let extractedNumberText='Apple cost is 2.35 in 2111111Korzinka!';
 let onlyWords='There is you cannot see any numbers where inside of text as well as program throw error such as no number';
 function extractPriceFromText(text){
       
     if(!text.match(/\d+/g)){
         return("No matching price was found")
     }
 
     let number=text.match(/\d+/g)
     console.log(number);
     return number   
 }
 extractPriceFromText(extractedNumberText)
 
 
 
  
 
  
 
 
 