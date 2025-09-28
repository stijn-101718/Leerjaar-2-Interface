let globalVar = 10;

const myObject = {
    waarde: 5,
    regularFunction: function() {
        console.log(this.waarde);    // 5
        console.log(globalVar);      // 10
    },
    arrowFunction: () => {
        console.log(this.waarde);    // undefined
        console.log(globalVar);      // 10
    }
}

myObject.regularFunction();
myObject.arrowFunction();

//bij arrow function werkt this.waarde niet omdat hij dan buiten de scope kijkt en waarde binnen deze staat \\