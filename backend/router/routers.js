import express from "express";
const router = express.Router(); // Initialize the Router

router.get("/", (req, res) => {
    res.send("Hello from the backend!");
    console.log("Server Running");
});

router.post("/register", (req, res) => {

 
    console.log("Received Data:", req.body); 
    res.send("Data Received");
});

export default router; 
