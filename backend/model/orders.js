const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const order= new Schema({
    registeredusers:{
        type:Schema.Types.ObjectId, 
        ref: "Users"
    },
    orderid:{
        type:String
    },

    ordereddateandtime:{
        type:String
    },
    productlist:[{
        producttype:{type:String},
        quantity:{type:Number,default:0},
        wash:{type:String,default:false},
        press:{type:String,default:false},
        fold:{type:String,default:false},
        pack:{type:String,default:false},
        price:{type:Number,default:0}
    }],
    storelocation:{
        type:String,
        default:'Warangal'
    },
    details:[{
        Houseno:{type:String,default:"4-6-8"},
        City:{type:String,default:"Madhapur"},
        District:{type:String,default:"Hyderabad"},
        State:{type:String,default:"Telangana"},
        Pincode:{type:String,default:"503208"}
    }],
    city:{
        type:String,
        default:'Hanamkonda'
    },
    storephone:{
        type:Number,
        default:'9798969594'
    },
    totalitems:{
        type:Number
    },
    price:{
        type:Number
    },
    status:{
        type:String,
        default:'Ready to pickup'
    },
});

module.exports=mongoose.model('Orders',order);



