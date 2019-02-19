const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({      
    useId: Schema.Types.ObjectId,
    userName: {unique:true, type:String},                //unique代表唯一的  
    password: String,
    createDate: {type:Date,default: Date.now()}
})


//发布
mongoose.model('User',userSchema);