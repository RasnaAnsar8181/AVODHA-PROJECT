const postModel = require("../Models/PostModels")

exports.getRecords = async(req,res) =>{
    try {
        const data = await postModel.find()
        if(data.length===0){
            return res.status(404).json({message:"The file is empty"})
        }
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message:`There is an error ${error}`})
    }
}

exports.getRecordById = async (req,res) =>{
    try {
        const data = new postModel(req.body)
        const isExist = await postModel.findOne({_id:data.id})
        if(!isExist){
            return res.status(404).json({message:"There is no such data "})
        }
        res.status(201).json(isExist)
    } catch (error) {
        res.status(500).json({message:"There is an error ",error})
    }
}

exports.postRecords = async(req,res)=>{
    try {
        const data = new postModel(req.body)
        const isExist = await postModel.findOne({title:data.title,content:data.content})
        if(isExist){
            return res.status(404).json({message:"The file already exist"})
        } 
        const savedData = await data.save()
        res.status(201).json({message:"The data successfully saved"})
    } catch (error) {
        res.status(500).json({message:"There is an error ",error})
    }
}

exports.putRecords = async (req,res) =>{
    try {
        const updatedData = await postModel.findOneAndReplace({id:req.params.id},req.body,{returnDocument:"after"})
        const savedData = await updatedData.save()
        res.status(201).json({message:"The data is updated and saved"})   
    } catch (error) {
        res.status(500).json({message:"There is an error ",error})

    }
}

exports.deleteRecords = async(req,res) =>{
    try {
        const deleteData = await postModel.findOneAndDelete({id:req.params.id})
        if(deleteData){
            return res.status(201).json({message:"The file is deleted"})
        }  
        res.status(404).json({message:"No such file exist"})
    } catch (error) {
        res.status(500).json({message:"There is an error ",error})
    }
}