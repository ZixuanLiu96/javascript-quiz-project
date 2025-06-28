class Question {
  // 1. constructor (text, choices, answer, difficulty)
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  // 2. shuffleChoices()
  shuffleChoices() {
    const newArr = [];
    const random = Math.floor(Math.random() * this.choices.length);
    for (let i = this.choices.length; i > 0; i--) {
      newArr.push(this.choices[random]);
      this.choices.splice(random, 1);
    }
    return newArr;
  }
}

const question1 = new Question("11", [1, 2, 3, 4, 5], "123", 1);
console.log(question1.shuffleChoices());
