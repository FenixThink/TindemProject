//conexion a base de datos

const port = process.env.Port || 3000

const conexionmongo = {
    user:'paoGelvez',
    password :'tsP4v2tf5rKRqxi',
    dbname : 'ProyectoTindem'
}

const uri =  `mongodb+srv://${conexionmongo.user}:${conexionmongo.password}@cluster0.kzzhkwa.mongodb.net/${conexionmongo.dbname}?retryWrites=true&w=majority`

export default uri