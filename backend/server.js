import  express  from "express";
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express()
const port = 8081
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)


app.get('/',(req,res)=>{
    res.send('hello 18')
})

app.listen(port, ()=> console.log('server is running on',port))