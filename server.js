import express from 'express'
const app = express()
import dotenv from 'dotenv'
import route from './routes/userRoutes.js'
import mongoose from 'mongoose'
import User from './models/User.js'



dotenv.config()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', route)
// app.use('/users', route)


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log(err)
})


app.listen(PORT, () => {
    console.log(`serving working on port ${PORT}`)
})