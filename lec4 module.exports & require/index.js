console.log("Inside the Index.js file :)");

//Note : By Default the functions,variables & memebers functions are private to their file and we manually need to export/give permission in order to use them in other JS file

function sum(a,b){
    console.log(a+b);
}

console.log(module.exports);

module.exports = {sum};


// Note: Using the new mjs export and import we follow totally different way of importing and exporting things.

// export function sum(a,b){
//     console.log(a+b);
// }

// export var name = "Sahnawaz Alam";