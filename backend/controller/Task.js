import { Employee } from "../model/employee.js";
import { Task } from "../model/task.js";


// create new task
export const task = async(req, res)=>{

    //fetch all the data from req body
    const {taskTitle, taskDescription, assignTo, taskOf} = req.body 

    try {
        //validation
        if(!taskTitle || !taskDescription || !assignTo || !taskOf){
            return res.status(400).json({
                success: false,
                message: "All field are required"
            })
        }

        //check designation 
        const {designationType} = req.user 
        if(designationType != "Manager"){
            return res.status(400).json({
                success: false,
                message: "Only manager can assign the task!"
            })
        }

        // check user 
        const isEmployeeExist = await Employee.findById(assignTo)
        if(!isEmployeeExist){
            return res.status(500).json({
                success: false,
                message: "Employee not found! Please select another employee"
            })
        }


        //create entry on db
        const task =  await Task.create({
            taskTitle,
            taskDescription,
            assignTo,
            taskOf
        })

        //return success 
        return res.status(200).json({
            success: true,
            task,
            message: `Task assign successsfully to ${isEmployeeExist.employeeName}`
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

//get all task
export const allTask = async(req, res)=>{
    try {
       
        // check user
        const {designationType} =  req.user

        if(designationType != "Manager"){
            return res.status(400).json({
                success: false,
                message: "Only manager can check the task! Please concern deparment to get access."
            })
        }

        //validation
        const allTask =  await Task.find({})
        
        if(!allTask){
            return res.status(500).json({
                success: false,
                message: "No record found"
            })
        }
        
        //get all task
        return res.status(200).json({
            success: true,
            message: "All task fetch successfully!"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error 
        })
    }
}

//update task
export const updateTask =  async(req, res)=>{
    // fetch id from params
    const {id} = req.params 
    // fetch all data from req  body 
    const {taskTitle, taskDescription, assignTo} =  req.body

    try {
        //VALIDATION
        if(!id){
            return res.status(400).json({
                success: false,
                message: "ID is invalid or null"
            })
        }

       //find task 
       const foundTask = await Task.findById(id)

       if(!foundTask){
            return res.status(400).json({
                success:false,
                message: "Task is not found!"
            })
       }

       //udate with new value
       foundTask.taskTitle = taskTitle
       foundTask.taskDescription = taskDescription
       foundTask.assignTo = assignTo

    //    save the new value 
       const updateTask = await foundTask.save()

       return res.status(200).json({
        success: true,
        updateTask,
        message: "task updated successfully!"
       })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

//delete task
export const deleteTask =async(req, res)=>{
    // fetch id from req params 
    const {id} = req.params

    try {
        // validation 
        if(!id){
            return res.status(400).json({
                success: false,
                message: "task id is invalid or null!"
            })
        }

        // check user
        const {designationType} =  req.user
        if(designationType != "Manager"){
            return res.status(400).json({
                success: false,
                message: "Only manager can delete the task!"
            })
        }

        //delete task from db
        const deleteTask =  await Task.deleteOne({_id: id})

        return res.status(200).json({
            success: true,
            deleteTask,
            message: "Task deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}


//get all task of specific task
export const specificProjectTask = async(req, res)=>{
    // fetch project id from params 
    const {id} = req.params

    try {
        // validation 
        if(!id){
            return res.status(400).json({
                success: false,
                message: "Invalid request"
            })
        }

        //check user 
        const {designationType} = req.user
        if(designationType != "Manager"){
            return res.status(400).json({
                success: false,
                message: "Only manager can see!"
            })
        }

        //all task filtered by id
        const specificProjectTask = await Task.find({taskOf : id})

        if(!specificProjectTask){
            return res.status(400).json({
                success: false,
                message: "No task Available!"
            })
        }

        return res.status(200).json({
            success:true,
            specificProjectTask,
            message: "All task fetched successfully!"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error
        })
    }
}
