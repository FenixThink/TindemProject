import express from 'express';
import mongoose from 'mongoose';
import uri from '../db/conexionMongo.js';
import routerUser from './routes/user.routes.js';
import routerAction from './routes/Actions.routes.js';
import routerCity from './routes/city.routes.js';
import routerArea from './routes/area.routes.js';
import routerProfileSpecialization from './routes/Profile_Specialization.routes.js';
import routeApplicant from './routes/Applicant.routes.js';
import routerSpecificInterest from './routes/Specific_interest.routes.js';
import routerProfileAccount from './routes/Profile_account.routes.js';
import routerCompany from './routes/company.routes.js';
import routerCountry from './routes/Country.routes.js';
import routesChats from './routes/Chats.routes.js'

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(routesChats)
app.use(routerUser)
app.use(routerAction)
app.use(routerCity)
app.use(routerArea)
app.use(routerProfileSpecialization)
app.use(routeApplicant)
app.use(routerSpecificInterest)
app.use(routerProfileAccount)
app.use(routerCompany)
app.use(routerCountry)


app.use(express.static('./'))

//mongo db conexion
mongoose.set('strictQuery',true)
mongoose.connect(uri
   
    // useNewUrlParser: true, useUnifiedTopology : true
)
    .then(()=>console.log('conectado a mongo db atlas'))
    .catch(e=> console.log(e))



app.listen(process.env.LOCALSERVERT , ()=>{
    
    console.log(`server running on port ${process.env.LOCALSERVERT}`)

})