const makeParagraph = (sent) => {
  let p = ''
  sent.forEach(sen => p+=sen + ' ')
  return p.trim()
}

const averageDogAge = (pets) => {
  let average = 0
  let count = 0
  pets.forEach(pet => {
    if(pet.species === 'dog'){
      average+= pet.age
      count++
    }
  })
  return average/count
}

const addToDigits = (num, modifier) => {
  return Number(num.toString().split('').map(digit => {
    return digit = (Number(digit) + modifier).toString().slice(-1)
    }).join(''))
}

const nightOwls = (peeps) => {
  return peeps.filter(person => {
    if(person.localTime >= 100 && person.localTime <= 400 && person.asleep === false){
    return person
    }
  })
  
}

const nap = (peeps) => {
  return peeps.map(person => {
    if(person.localTime >= 100 && person.localTime <= 400 ){
      person.asleep = true
      return person
    }else {
      return person
    }
  })
}

const findIndices = (nums, func) => {
  const arr =[];
  for(let i=0; i<nums.length; i++){
    if(func(nums[i])){
      arr.push(i)
    }
  }
    return arr
}

const Faqtory = () => {
  return {
    questions: [],
    length: 0,

    addQuestion: function(question){
      this.questions.push({
        text: question,
        answer: '',
        id: this.length
        })
      this.length++
    },

    answerQuestion: function(index,answer){
      if(this.questions[index].answer === ''){
        this.questions[index].answer = answer
      }
    }
  }
}


class Dog {
  constructor(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
  }

  makeNoise(){
    return 'Woof.'
  }
}

class GreatDane extends Dog{
  constructor(name, color){
    super(name, 'Great Dane', color)
  }

  makeNoise(){
    return super.makeNoise().toUpperCase()
  }

}

class Beagle extends Dog{
  constructor(name){
    super(name, 'Beagle', 'white/black/brown')
  }

  makeNoise(){
    return 'Awooooooooo.'
  }

}

class Pointer extends Dog{  
  constructor(name, color, points){
    super(name, 'Pointer', color)
    this.points = points
  }

  point(){
    return this.points ? 'Over there!': super.makeNoise()
  }
}


module.exports = {
  makeParagraph,
  averageDogAge,
  addToDigits,
  nightOwls,
  nap,
  findIndices,
  Faqtory,
  Dog,
  GreatDane,
  Beagle,
  Pointer,
}