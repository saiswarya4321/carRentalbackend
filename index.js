const express=require("express")
const cors = require('cors');
const cookieparser=require("cookie-parser")
const { connectionDB } = require("./config/db");
const apiRouter = require("./Routes");
const DealerRoutes = require("./Routes/dealerRoutes");
const carRouter = require("./Routes/carRoutes");
const { bookingRouter } = require("./Routes/bookingRoutes");
const reviewRouter = require("./Routes/reviewRoutes");
const app=express();
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: true })) // ✅ important for form-data parsing

app.use(cors({origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'] }));

    app.use(cookieparser());
    connectionDB();

    app.use("/api",apiRouter)
    app.use("/api/v1",DealerRoutes)
    app.use("/api/v1/cars",carRouter)
    app.use("/api/v1/booking",bookingRouter)
    app.use("/api/v1/review",reviewRouter)




app.get("/",(req,res)=>{
res.send("hello world")
})




const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is runnig on http://localhost:${port}`)
})