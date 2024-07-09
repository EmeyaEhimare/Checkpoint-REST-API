import User from "../models/User.js";

export const createUser = async(req,res) => {
    const{name, age, country, city} = req.body
    try{
        const newUser = new User({
            name:name,
            age,
            country:country,
            city:city
        })

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(err){
        console.error(err)
        res.status(400).json({error:err.message})
    }
}


export const getUser = async function (req, res) {
    try {
        const users = await User.find().catch(err => {
            console.error(err)
            return res.status(500).json({message: 'error retrieving users'})
        })
        res.json(users)
        
    } catch (err) {
        console.log(err);
        res.Status(500).json({ message: `Error retrieving users` });
    }
}


export const updateUser = async (req,res) => {
    const userId = req.params.id
    const updates = req.body
    try{
        const updatedUser = await User.findByIdAndUpdate(userId,updates, {new:true})
        if (!updateUser) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.json(updatedUser)
    }catch(err){
        console.error(err)
        res.status(500).json({message:'Error updating user'})
    }
}


export const deleteUser = async (req,res) => {
    const userId = req.params.id
    try{
        const deletedUser = await User.findByIdAndDelete(userId)
        if(!deletedUser){
            return res.status(404).json({message:"user not found"})
        }
        res.json({message: 'User deleted successfully'})
    }catch(err){
        console.error(err)
        res.status(500).json({message:'Error deleting user'})
    }
}
