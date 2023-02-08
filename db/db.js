import {createPool} from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config({path : '.env'});

export const pool = createPool({
    host : process.env.BD_HOST,
    user : process.env.BD_USER,
    password : process.env.BD_PASSWORD,
    port : process.env.BD_PORT,
    database : process.env.BD_NOMBRE
});

