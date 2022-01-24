const express=require('express');
const router=express.Router();
const {json}=require('body-parser');
const orders=require('../model/orders');


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

router.post('/orders',async(req,res)=>{

    try {
        const {productlist,totalitems,price,details} = req.body;
        const Orders = await orders.create({
            totalitems,
            price,
            ordereddateandtime: new Date().toLocaleString(),
            productlist,
            details
           
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


module.exports=router;