import mongoose from 'mongoose'

const productSchema=mongoose.Schema({

    name:{
        type:String,
        requred:true,
    },
    image:{
        type:String,
        requred:true,
    },
    desc:{
        type:String,
        requred:true,
    },
    price:{
        type:Number,
        requred:true,
    },
    QTY:{
        type:Number,
        requred:true,
    },
})
const Product=mongoose.model('product',productSchema)

export default Product