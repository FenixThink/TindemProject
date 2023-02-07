import express from 'express';
import userRoute from './routes/user.routes.js'
import routerAction from './routes/Actions.routes.js'
import routerCity from './routes/city.route.js';
import routerArea from './routes/Area.routes.js';
import routerProfileSpecialization from './routes/Profile_Specialization.routes.js';
import routeApplicant from './routes/registerAplicant.routes.js';
import speficitInterest from './routes/specificInterest.routes.js';

const app = express();
app.use(express.json());
app.use(userRoute)
app.use(routerAction)
app.use(routerCity)
app.use(routerArea)
app.use(routerProfileSpecialization)
app.use(routeApplicant)
app.use(speficitInterest)
app.use(express.static('./'))
app.listen(5173, ()=>{
    
    console.log('server running on port 5173')

})
