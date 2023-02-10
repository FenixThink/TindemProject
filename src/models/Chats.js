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
        // type:String
        
    }


})

//modelo



// Chats.create(
//     {
//         idApplicant:1,
//         idCompany:2,
//         message:[{text:"oola",role:'receiver',hour:"15:00"},{text:" hqoola",role:'transmitter',hour:"15:01"}]
//     }
// )

export default  mongoose.model('chats',ChatsSchema)