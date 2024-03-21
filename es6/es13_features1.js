// https://javascript.plainenglish.io/5-most-exciting-es13-features-you-should-know-about-8c49ab218dba


const mockUserInfo = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          userName: 'fatfish'
        })
      }, 1000)
    })
  }

console.log('Who are you ?');
console.log(await mockUserInfo());

////////////////////////////////////////////////////////////////

const array = [ 1, 2, 3, 4, 5 ]
const lastElement = array.at(-1) // 5
const firstElement = array.at(0) 

console.log({ firstEle: firstElement, lastEle: lastElement});

////////////////////////////////////////////////////////////////
const fs = await import('node:fs');
const readFiles = (filePaths) => {
  return filePaths.map(
    (filePath) => {
      try {
        const data = fs.readFileSync(filePath, 'utf8');
        return `${filePath}: ${data}`;
      } catch (error) {
        return new Error(
          `error while loading file: ${filePath}`,
          {cause: error}
        )
      }
    })
};

// console.log(readFiles(['test.txt', 'not-existing-file.txt']));

//////////////////////////////////////////////////////////////////////////////

class Person {
  #money=1
  constructor (name) {
    this.name = name
  }
  get money () {
    return this.#money
  }
  set money (money) {
    this.#money = money
  }
  showMoney () {
    console.log(this.#money)
  }
}
const p1 = new Person('fatfish')
console.log(p1.money) // 1
// p1.#money = 2 // We cannot modify #money in this way
p1.money = 2
console.log(p1.money) // 2
// ==>> console.log(p1.#money) // Error: Właściwość „#money” nie jest dostępna poza klasą „Person”, ponieważ ma identyfikator prywatny.

