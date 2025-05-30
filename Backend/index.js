const express = require("express");
const app = express();
const mongoose = require("mongoose")

const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const {PositionsModel}=require("./model/PositionsModel")
const { HoldingModel } = require("./model/HoldingModel")
const {OrderModel} =require("./model/OrderModel")

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.listen(PORT, () => {
    console.log("App is listening!...");
    mongoose.connect(uri).then(() => {
        console.log("Database Connection Successful! ")
    });

    
})

app.post('/newOrder',async(req,res)=>{
    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    newOrder.save();
})
  
app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
})
app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})
  //     app.get("/adddata", async (req, res) => {
  //     let tempData = [
  //       {
  //         product: "CNC",
  //         name: "EVEREADY",
  //         qty: 2,
  //         avg: 316.27,
  //         price: 312.35,
  //         net: "+0.58%",
  //         day: "-1.24%",
  //         isLoss: true,
  //       },
  //       {
  //         product: "CNC",
  //         name: "JUBLFOOD",
  //         qty: 1,
  //         avg: 3124.75,
  //         price: 3082.65,
  //         net: "+10.04%",
  //         day: "-1.35%",
  //         isLoss: true,
  //       },
  //     ];
          
  //         tempData.forEach((item) => {
  //             let newPositions = new PositionsModel({
  //               product: item.product,
  //               name: item.name,
  //               qty: item.qty,
  //               avg: item.avg,
  //               price: item.price,
  //               net: item.net,
  //               day: item.day,
  //               isLoss: item.isLoss,
  //             });
  //             newPositions.save();
  //         });
  //         res.send("Done");
  
  
  // })