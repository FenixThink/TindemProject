import mongoose from 'mongoose';
//esquema
// estructura de datos que va a contener el modelo
const ChatsSchema = new mongoose.Schema({
    idApplicant : {
        type:Number
    },
    idCompany : {
        type:Number
    },
    message : {
        type:Array
    }
})


export default  mongoose.model('chats',ChatsSchema)