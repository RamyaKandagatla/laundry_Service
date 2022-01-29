const express=require('express');
const router=express.Router();
const {json}=require('body-parser');
const orders=require('../model/orders');




router.post('/orders',async(req,res)=>{

    try {
        const {productlist,totalitems,price,details} = req.body;
        const Orders = await orders.create({
            totalitems,
            price,
            ordereddateandtime: new Date().toLocaleString(),
            productlist,
            details,
            user:req.user
           
        });
        return res.json({
            status: "success",
            message: "Order placed Succesfully",
            Orders,
        });
    } catch (e) {
        res.status(500).json({
            status: "order Not created",
            error: e.message,
        });
    }

});


router.get("/orders", async function(req, res) {
    try {
        const getorders = await orders.find({ user: req.user }).sort({
            _id: -1,
        });
        return res.json({
            status: "success",
            getorders,
        });
    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message,
        });
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const order = await orders.find({_id:req.params.id});
        res.status(200).json({
            status:'success',
            data:order.productlist
        });

    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })
    }
});


module.exports=router;