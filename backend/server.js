import express from "express";
import cors from "cors";
import Router from "./router/routers.js"


const app = express();

app.use(cors());
app.use(express.json()); 


app.use("/api/auth/" , Router)




const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
