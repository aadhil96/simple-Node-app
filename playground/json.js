// var obj ={
//     name :'Aadhil'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Aadhil" , "age" : 22}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var orginalNote ={
    title : 'Some title',
    body : 'Some body'
};

orginalNoteString = JSON.stringify(orginalNote);
fs.writeFileSync('notes.json',orginalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);