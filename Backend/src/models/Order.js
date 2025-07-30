import mongoose from mongoose;

const orderSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    orderNumber : {
        type : String,
        default : ()=>uuidv4()
    },
    cartItems :{
        type :[
            {
                product : {type : mongoose.Schema.Types.ObjectId,ref :'Product'},
                quantity : {type : Number, default : 1}


            }
        ]
    },
    location : {
        type : String,
        required : true
    },
    phone : {
        type : String
    }
})
const Order = mongoose.model ('Order',orderSchema)

export default Order;