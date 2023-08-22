// =====1=====

function fnWithList(list) {
    for (let i = 0; i < list.length; i+=1) {
        const element = list[i];
        console.log(`${i+1} -  ${element}`)
    }
}

fnWithList(["cat", "dog", "fish"])

// =====2=====

function calculateEngravingPrice(message2, pricePerWord) {
    const words = message2.split(" ")
    console.log(words.length * pricePerWord)
}

calculateEngravingPrice("i like apples", 5)

// =====3=====

function findLongestWord(string) {
    const longWord = string.split(" ")
    let longest = ""
    for (let i = 0; i < longWord.length; i+=1) {
        const element = longWord[i];
        if (element.length > longest.length) {
            longest = element
        }
    }
    console.log(longest)
}

findLongestWord("door cat sleeeep frog")

// =====4=====

function formatString(string4) {
    if (string4.length < 40) {
        console.log(string4)
    }
    else {
        console.log(string4.slice(0, 39) + "...")
    }
}

formatString("hgqxnnvgagfagaghyurghagagghaghqwtaasdegfagsh")

// =====5=====

function checkForSpam(message5) {
    if (message5.includes("sale")) {
        console.log("Тут є знижка")
    }
    else if (message5.includes("spam")){
        console.log("Тут є спам")
    }
}

checkForSpam("sale apple green table")

// =====6=====
let input;
 
const numbers = [];
 
let total = 0;


function takeNumbers() {

    while (true) {
        let input = prompt("Введіть число");
        if (input === null) {
            break;
        }

        let number = parseInt(input)

        numbers.push(number)
        
        
    }
    
    for (const i of numbers) {
        total += i
    }

    if (numbers.length > 0) {
        console.log('Загальна сума чисел дорівнює ' + total);
      } else {
        console.log('Масив порожній.');
      }

}


takeNumbers()







