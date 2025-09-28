let globalVar = 10;

const myObject = {
    waarde: 5,
    regularFunction: function() {
        console.log(this.waarde);    
        console.log(globalVar);      
    },
    arrowFunction: () => {
        console.log(this.waarde);   
        console.log(globalVar);     
    }
}

myObject.regularFunction();
myObject.arrowFunction();

//bij arrow function werkt this.waarde niet omdat hij dan buiten de scope kijkt en waarde binnen deze staat \\