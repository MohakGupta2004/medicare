import User from "../models/UserSchema.js"

export const updateUser = async(req,res)=>{
    const id= req.params.id

    try{
        const updatedUser = await User.findByIdAndUpdate(id, {...req.body}, {new: true}).select('-password')  //Find the user by its
        res.status(200).json({
            success: true,
            message: "Successfully Updated",
            data: updateUser
        })
    }catch(err){
        res.status(500).json({success: false, message: "Failed to update"})
    }
}


export const deleteUser = async(req,res)=>{
    const id= req.params.id

    try{
        await User.findByIdAndDelete(id, ).select('-password')  //Find the user by its
        res.status(200).json({
            success: true,
            message: "Successfully Deleted",
        })
    }catch(err){
        res.status(500).json({success: false, message: "Failed to delete"})
    }
}


export const getSingleUser = async(req,res)=>{
    const id= req.params.id

    try{
        const user = await User.findById(id,).select('-password')  //Find the user by its
        res.status(200).json({
            success: true,
            message: "User found",
            data: user
        })
    }catch(err){
        res.status(404).json({success: false, message: "User Not Found"})
    }
}


export const getAllUser = async(req,res)=>{
    try{
        const users = await User.find({}).select('-password')  //Find the user by its
        res.status(200).json({
            success: true,
            message: "Users found",
            data: users
        })
    }catch(err){
        res.status(404).json({success: false, message: "Users Not Found"})
    }
}