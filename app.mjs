import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import morgan from 'morgan';
import storage from './public/libs/multer.js';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import indexRouter from './routes/index.routes.js'
import userRouter from './routes/user.routes.js'
import applicantRouter from './routes/applicant.routes.js'
import companyRouter from './routes/company.routes.js'
import areaRouter from './routes/area.routes.js'
import chats from './routes/chats.routes.js'
import router from './routes/profile_account.routes.js'
import actionRouter from './routes/actions.routes.js'
import profileSpecializationRouter from './routes/profile_Specialization.routes.js'

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

app.use(morgan('dev'));
//Facilita la comprensión de data enviada de un formulario al servidor
app.use(express.urlencoded({ extended: false }));

//AutoGenerar el path para almacenar las imagenes
app.use(multer({
  storage,
  dest: path.join(__dirname, 'public/img'),
  //FileSize, para evitar que se suban imagenes DEMASIADO pesadas // Peso actual: 3Mb
  limits: { fileSize: 3000000 }
}).single('img'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));


app.use('/', indexRouter);
app.use(userRouter);
app.use(applicantRouter);
app.use(companyRouter);
app.use(areaRouter);
app.use(chats);
app.use(router);
app.use(actionRouter)
app.use(profileSpecializationRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(
    {
      message: err
    }
  )
});

export default app
