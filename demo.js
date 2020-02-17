//  class
class Dog extends Animal {}

//callback
callSomeAPI(function(result) {
    console.log(result)
})

// promise
callSomeAPI(result).then(result => {
    console.log(result)
})

//  async,await
const start = async () => {
    const result = await callSomeAPI()
}

start()

// 轉成 es6
// 求圓面積
function circleArea(radius) {
    return radius * radius * Math.PI
}

const circleArea = radius => {
    radius * radius * Math.PI
}

// 根據 visitor 資料回傳不同字串
function visitMessage(visitor) {
    var age = visitor.age
    var name = visitor.name
    if (age < 18) {
        return 'Dear ' + name + ', you are under age'
    }
    return 'Welcome, ' + name + '!'
}

const visitMessage = ({ age, name }) => {
    age < 18 ? `Dear ${name}, you are under age` : `Welcome, ${name}!`
}
