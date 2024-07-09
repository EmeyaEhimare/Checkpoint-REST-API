import mongoose from "mongoose";

const schema = mongoose.Schema

const userSchema = new schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User', userSchema)

export default User