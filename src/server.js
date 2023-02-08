import express from 'express';
import routerUser from './routes/user.routes.js';
import routerAction from './routes/Actions.routes.js';
import routerCity from './routes/city.routes.js';
import routerArea from './routes/area.routes.js';
import routerProfileSpecialization from './routes/Profile_Specialization.routes.js';
import routeApplicant from './routes/registerAplicant.routes.js';
import routerSpecificInterest from './routes/specificInterest.routes.js';
import routerProfileAccount from './routes/profileAccount.routes.js';
import routerCompany from './routes/company.routes.js';

const app = express();
app.use(express.json());
app.use(routerUser)
app.use(routerAction)
app.use(routerCity)
app.use(routerArea)
app.use(routerProfileSpecialization)
app.use(routeApplicant)
app.use(routerSpecificInterest)
app.use(routerProfileAccount)
app.use(routerCompany)

app.use(express.static('./'))
app.listen(5173, ()=>{
    
    console.log('server running on port 5173')

})
