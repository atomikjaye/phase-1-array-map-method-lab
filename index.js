const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   // iterate through the tutorial array
//   for (let tutorialIndex in tutorials){
//       const singleTutorial = tutorials[tutorialIndex]
//       console.log(`Single Tutorial ${tutorialIndex}`, singleTutorial)
//       // make array is individual
//       let wordArr = singleTutorial.split(' ');
//       // console.log("Old word", wordArr)
//       let newWordArr = wordArr.map(word => word[0].toUpperCase() + word.slice(1))
//       // console.log("New Words", newWordArr)
//       // tutorials.pop()
//       tutorials.push(newWordArr.join(' '))
//       tutorials.shift()
//   }
//   console.log(tutorials)
// return tutorials
// }

const titleCased = () => {
  // iterate through the tutorial array
  for (let tutorialIndex in tutorials) {
    // set variable for single tutorial
    const singleTutorial = tutorials[tutorialIndex]
    // split singleTutorial into an array of words
    let wordArr = singleTutorial.split(' ');
    // Map over wordArr and capitalize each word
    let newWordArr = wordArr.map(word => word[0].toUpperCase() + word.slice(1))
    // join new array with capitalized words into the tutorials function at the end
    tutorials.push(newWordArr.join(' '))
  }
  // delete the tutorials from the beginning
  for (let i = 0; i < 10; i++) {
    tutorials.shift()
  }
  return tutorials
}

// titleCased()
