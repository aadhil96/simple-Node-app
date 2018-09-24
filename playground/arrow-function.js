var squre = (x) => x * x;
console.log(squre(9));

var user = {
    name : 'Aadhil',
    sayHi : () => {
        console.log(`Hi I am ${this.name} `);
    },

    sayHiAlt (){
        console.log(arguments);
        console.log(`Hi I am ${this.name} `);
    }
}

user.sayHiAlt(1,2,3);