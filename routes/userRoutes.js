import {Router} from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../controllers/userController.js'


const route = Router()

route.get('/', (req, res) => {
    res.send("working")
})

route.post('/users/',createUser)
route.get('/users/', getUser)
route.put('/users/:id', updateUser)
route.delete('/users/:id', deleteUser)



export default route