import express from 'express';
import userRoute from './routes/user.routes.js'

const app = express();
app.use(express.json());
app.use(userRoute)
app.use(express.static('./'))

app.listen(5173, ()=>{
    
    console.log('server running on port 5173')

})
