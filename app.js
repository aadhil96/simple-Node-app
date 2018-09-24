console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions ={
  describe : "Titile of the note",
  demand : true,
  alias : 't'
}

const bodyOptions = {
  describe : 'Body pf the note',
  demand : true,
  alias : 'b'
}
const argv = yargs
      .command('add','Add a new note', {
      title : titleOptions,
      body:bodyOptions,
    })
      .command('list' , 'List all notes')
      .command('read', 'Read a note', {
        title : {
          describe : 'Title a new note',
          demand : true ,
          alias : 't' 
        },
      })
      .command('remove' , 'Reomve the command ',{
        title : titleOptions,
      })
      .help()
      .argv;

var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
     var allNotes = notes.getAll(); 
     console.log(`Printing ${allNotes.length} notes(s) ` );
     allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
   var note = notes.getNote(argv.title);
   if(note){
       console.log('Note found');
       notes.logNote(note);
 }else{
       console.log("Note not found");
   }

} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed': 'Note not found'
    console.log(message);
} else {
  console.log('Command not recognized');
}


























//var filteredArray = _.uniq(['ammar',1,'Aadhil',1,2,3,4]);//delete duplicate array console.log(filteredArray);
//console.log(filteredArray);
//console.log(_.isString(true)); //find is string
//console.log(_.isString('ABC'));
//var res = notes.addNote();
//var add = notes.add(10,10);
//console.log(add);
//var user = os.userInfo();
//console.log(user);
//fs.appendFile('greeting.txt','Hello');
/*fs.appendFile('greeting.txt', 'Hello ' + user.username + 'you are ' + notes.age , function(err){
    if(err){
        console.log('Unable to write file');
    }
});*/