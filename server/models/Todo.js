//Require mongoose
const mongoose = require('mongoose'); 

//Create schema contains a single field named 'name.' 
//The 'name' field is of type String
const TodoSchema = new mongoose.Schema({ name: String }); 

//Export the Mongoose model with the collection name "Todo"
module.exports = mongoose.model('Todo', TodoSchema);

