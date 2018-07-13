
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove();
//
// Todo.findByIdAndRemove();

Todo.findByIdAndRemove('5b4906b82d819f9783aa0553').then((todo) => {
  console.log(todo);
});
