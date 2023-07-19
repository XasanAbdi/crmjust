import Product from "../models/productModel.js";

export const createProduct=async(req,res)=>{
    try {
        const {name,image,desc,price,QTY}=req.body;

    const product=await Product.create(
        {
            name,image,desc,price,QTY
        }
    );
    if (product) {
        res.status(201).json(product);
    }
    else{
        res.status(400).json({message:'product Not Created'})
    }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


export const updateProduct = async(req,res)=>{
    try {
        const {name,image,desc,price,QTY}=req.body;

    const product=await Product.findById(req.parmas.id)

    if (product) {
        product.name=name
        product.image=image
        product.desc=desc
        product.price=price
        product.QTY=QTY
        
    }
    else{
        res.status(404).json({message:'product Not Found'})
    }
    const updatedProduct=await product.save()
    if (updateProduct) {
        res.status(201).json(updateProduct);
    }
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
   

}

export const deletedProduct=async(req,res)=>{
    try {
        const product=await Product.findByIdAndDelete(req.parmas.id)

    if (product) {
        res.status(200).json({message:'product deleted...'})
    }
    
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}