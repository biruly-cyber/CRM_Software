import mongoose from "mongoose";

const employeeSchema  = new mongoose.Schema({
    employeeName:{
        type:String,
        required:true 
    },
    gender:{
        type:String
    },
    employeeEmail:{
        type:String,
        required:true
    },
    employeePhoneNumber:{
        type:String
    },
    dateOfBirth:{
        type:String 
    },
    address:{
        type:String
    },
    postOffice:{
        type:String
    },
    policeStation:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String 
    },
    pinNumber:{
        type:String 
    },
    designation:{
        type:String
    },
    department:{ 
        type:String
    }
},{
    timestamps: true
}
)