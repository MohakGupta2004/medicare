import Doctor from "../models/DoctorSchema.js"
import Booking from "../models/BookingSchema.js"

export const updateDoctor = async(req,res)=>{
    const id= req.params.id

    try{
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {...req.body}, {new: true})  //Find the user by its
        res.status(200).json({
            success: true,
            message: "Successfully Updated",
            data: updatedDoctor
        })
    }catch(err){
        res.status(500).json({success: false, message: "Failed to update"})
    }
}


export const deleteDoctor = async(req,res)=>{
    const id= req.para.Doctor

    try{
        await Doctor.findByIdAndDelete(id, ).select('-password')  //Find the user by its
        res.status(200).json({
            success: true,
            message: "Successfully Deleted",
        })
    }catch(err){
        res.status(500).json({success: false, message: "Failed to delete"})
    }
}


export const getSingleDoctor = async(req,res)=>{
    const id= req.params.id

    try{
        const doctor = await Doctor.findById(id).populate("reviews").select('-password')  //Find the user by its
        res.status(200).json({
            success: true,
            message: "User found",
            data: doctor
        })
    }catch(err){
        res.status(404).json({success: false, message: "User Not Found"})
    }
}


export const getAllDoctors = async(req,res)=>{

    try{
        const {query} = req.query
        let Doctors;
        if(query) {
            Doctors = await Doctor.find({isApproved: 'approved', $or:[
                {name:{$regex:query,$options:'i'}},
                {specialization:{$regex:query,$options:'i'}}
            ]}).select('-password')
        }else{
          Doctors = await Doctor.find({isApproved: 'approved'}).select('-password') 
        }   //Find the user by its
        res.status(200).json({
            success: true,
            message: "Users found",
            data: Doctors
        })
    }catch(err){
        res.status(404).json({success: false, message: "Users Not Found"})
    }
}

export const getDoctorProfile = async(req,res)=>{
    const doctorId = req.userId

    try{
        const doctor=await Doctor.findById(doctorId)

        if(!doctor){
            return res.status(404).json({success:false, message:'doctor not found'})
        }

        const {password, ...rest} = doctor._doc
        const appointments = await Booking.find({doctor:doctorId})

        res.status(200).json({success:true, message:'profile info is getting', data:{...rest, appointments}})
    }catch(err){
        res.status(500).json({success: false, message: "Something went wrong"})
    }
}