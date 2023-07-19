import Users from "../models/userModel.js";
import generateToken from "../utilits/generateToken.js";


export const register=async(req,res)=>{
   try {
    const {name,email,password,address,phone}=req.body;
    const userExists =await Users.findOne({email})
    if (userExists) {
        res.status(400).json({message:'user already exists'})
    }
    else{ 
        const user = Users.create({
            name, email, password,address,phone
        })
    
        if (user) {
            res.status(201).json({
               _id: user._id,
               name: user.name,
               email: user.email,
               password: user.password,
               address:user.address,
               phone: user.phone,   
               token:generateToken(user._id)
    
            })
    }
    else{
        res.status(401).json({message:'Invalid User Data'});
    }
}
   } catch (error) {
    res.status(500).json({error:error.message})
   }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;

    const user=await Users.findOne({email});
    if (user && password==user.password) {
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            address:user.address,
            phone:user.phone,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)

        })
        
    }
    else{
        res.status(404).json({message:'invalid email or password'});
    }
    } catch (error) {
    res.status(500).json({error:error.message})
        
    }
}




export const getUserprofile=async(req,res)=>{
    try {
        const {id,token}=req.body;
    const user=await Users.findById(id);
    if (user) {
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            address:user.address,
            phone:user.phone,
            isAdmin:user.isAdmin,
            token

        })
        
    }else{
        res.status(404).json({message:'invalid data'});
    }

    } catch (error) {
    res.status(500).json({error:error.message})
        
    }
}