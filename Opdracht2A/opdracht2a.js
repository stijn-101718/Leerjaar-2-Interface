const multiply = (a, b) => {
    return a * b;

}

const greet  = (name) => {
    return "Hello, " + name + "!";
}

let double = ( keer) => {
    return keer * 2;

}

//console.log(double(7))\\


let filterEvens = (getallen) => {
    let evens = []

    for (let i = 0; i < getallen.length; i++) {
        const element = getallen[i];
        if (element %2 === 0) {
            evens.push(element)
        }
    }
    return evens
}

console.log(filterEvens([1, 2, 3, 4, 5]))