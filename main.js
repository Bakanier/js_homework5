// function concatStrings(str1, str2) {
//     return str1.concat(str2);
//   }
  
//   const string1 = "Hello ";
//   const string2 = "world!";
//   const result = concatStrings(string1, string2);
//   console.log(result); 

//   function replaceSubstring(inputString, targetSubstring, replacement) {
    
//     return inputString.replaceAll(targetSubstring, replacement);
//   }
  
 
//   const originalString = "Это текст, которую нужно изменить. Это текст.";
//   const newString = replaceSubstring(originalString, "текст", "строка");
//   console.log(newString);

//   function stringToLowerCase(inputString) {
//     return inputString.toLowerCase();
//   }
  
  
//   const str = "HELLO WORLD!";
//   const lowerCaseString = stringToLowerCase(str);
//   console.log(lowerCaseString);


//   function containsSubstring(inputString, targetSubstring) {
//     return inputString.includes(targetSubstring);
//     }
    
//     const testString = "Это пример строки, которую мы проверяем.";
//     const substringToFind = "пример";
//     const res = containsSubstring(testString, substringToFind);
//     console.log(res);

//     const getIndexOf = (inputString, targetSubstring) => inputString.indexOf(targetSubstring);


//     const testString1 = "Это пример строки, которую мы ищем.";
//     const substringToFind2 = "пример";
//     const index = getIndexOf(testString, substringToFind);
//     console.log(index); 

//     function splitString(inputString) {
//         return inputString.split(' ');
//       }
      
//       const testString2 = "Это пример строки для разделения на слова";
//       const wordArray = splitString(testString);
//       console.log(wordArray);

    // function extractSubstring(inputString, startIndex, endIndex) {
    //     return inputString.slice(startIndex, endIndex);
    // }
      
    // const testString3 = " это пример строки для извлечения подстроки ";
    // const startIndex = 5;
    // const endIndex = 11;
    // const extractedSubstring = extractSubstring(testString3, startIndex, endIndex);
    // console.log(extractedSubstring);


    // function convertToString(number) {
    //     return number.toString();
    // }
      
      
    // const myNumber = 123;
    // const numberAsString = convertToString(myNumber);
    // console.log(numberAsString);


    // function stringToFloat(inputString) {
    //     return parseFloat(inputString);
    // }
      
    // const numberString = "3.14159";
    // const floatValue = stringToFloat(numberString);
    // console.log(floatValue);


    // const sumNumbers = (num1, num2) => num1 + num2;

    // const result = sumNumbers(41,28 );
    // console.log(result);


    // function getFixedNumber(number) {
    //     return number.toFixed(2);
    // }
      
    // const myNumber2 = 3.14159;
    // const formattedNumber = getFixedNumber(myNumber2);
    // console.log(formattedNumber);


    // function stringToInteger(inputString) {
    //     return parseInt(inputString, 10);
    // }
      
    // const numberString2 = "23";
    // const integerValue = stringToInteger(numberString2);
    // console.log(integerValue);


    // function addNumbers(num1, num2) {
    //     return num1 + num2;
    // }
      
      
    // const result2 = addNumbers(8, 7);
    // console.log(result2);


    // function stringToFloat(inputString) {
    //     return parseFloat(inputString);
    // }

    // const numberString1 = "3.14159";
    // const floatValue2 = stringToFloat(numberString1);
    // console.log(floatValue2);

    // let fruits = ["яблоко", "банан", "апельсин", "груша"];
    // fruits.push("вишня")
    // fruits.pop()
    // console.log(fruits)


    // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let evenNumbers = numbers.slice().filter(number => number % 2 === 0);
    // let resultString = evenNumbers.join(", ");
    // console.log(resultString);


    // let colors = ["красный", "синий", "зеленый"];
    // colors.unshift("оранжевый");
    // colors.shift();
    // console.log(colors);


    // let firstArray = [1, 2, 3];
    // let secondArray = [4, 5, 6];
    // let mergedArray = firstArray.concat(secondArray);
    // let searchValue = 3;
    // let containsValue = mergedArray.includes(searchValue);
    // console.log(containsValue);

    // let animals = ["кот", "собака", "попугай"];
    // animals.push("рыбка");
    // let newIndex = animals.indexOf("рыбка");
    // console.log("Индекс нового животного 'рыбка': " + newIndex);


    // let numbers1 = [1, 2, 3, 4, 5];
    // let slicedArray = numbers1.slice(0, 2);
    // slicedArray.reverse();
    // let resultString1 = slicedArray.toString();
    // console.log(resultString1);


    // let fruits2 = ["яблоко", "банан", "апельсин", "груша"];
    // fruits2.unshift("киви");
    // fruits2.shift();
    // console.log(fruits2);


    // let firstArray = [1, 2, 3];
    // let secondArray = [4, 5, 6];
    // let mergedArray = firstArray.concat(secondArray);
    // let resultString = mergedArray.join(", ");
    // console.log(resultString);

    function findUniqueWords(inputString) {
        const words = inputString.toLowerCase().split(/\s+/)
        const uniqueWordsSet = new Set(words)
        const uniqueWordArray = Array.from(uniqueWordsSet)
        return uniqueWordArray
    }

    const inputText = "Привет, мир! Это просто пример строки. Пример строки с уникальными словами."
    const uniqueWordsArray = findUniqueWords(inputText)
    console.log(uniqueWordsArray)


    function replaceVowelsWithAsterisks(inputString) {
        const vowels = "AEIOUaeiou"
        let result = ""
    for (let i = 0; i < inputString.length; i++) {
          const currentChar = inputString[i];
          if (vowels.includes(currentChar)) {
            result += "*"
          } else {
            result += currentChar
          }
        }
      return result
      }

      const inputText1 = "Hello, World!"
      const modifiedText = replaceVowelsWithAsterisks(inputText1)
      console.log(modifiedText)



      function calculateAverage(numbers) {
        if (numbers.length === 0) {
          return 0
        }
        let sum = 0
        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i]
        }
       return sum / numbers.length
      }
      const numberArray = [5, 10, 15, 20, 25]
      const average = calculateAverage(numberArray)
      console.log("Среднее значение:", average)


      function parseStringToNumbers(inputString) {
        const numberStrings = inputString.split(',')
        const numbers = []
        for (let i = 0; i < numberStrings.length; i++) {
          const number = parseInt(numberStrings[i], 10)
          if (!isNaN(number)) { 
            numbers.push(number)
          }
        }
      
        return numbers
      }

      const inputString = "5, 10, 15, 20, 25"
      const numberArray2 = parseStringToNumbers(inputString)
      console.log(numberArray2)


      function reverseWordsInSentence(sentence) {
        const words = sentence.split(' ')
        const reversedWords = words.reverse()
        const reversedSentence = reversedWords.join(' ')
        return reversedSentence
      }
      
      const inputSentence = "Пример функции для переворачивания слов в предложении"
      const reversedSentence = reverseWordsInSentence(inputSentence)
      console.log(reversedSentence)


      function filterUniqueNumbers(numbers) {
        const uniqueNumbers = [];
        for (let i = 0; i < numbers.length; i++) {
          const number = numbers[i]
          if (uniqueNumbers.indexOf(number) === -1) {
            uniqueNumbers.push(number)
          }
        }
        return uniqueNumbers
      }
    
      const numberArray3 = [1, 2, 3, 2, 4, 5, 3, 6]
      const uniqueNumbers = filterUniqueNumbers(numberArray3)
      console.log(uniqueNumbers)