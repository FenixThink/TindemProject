import GeneralQuerySql from "../DTO/GeneralQuerySql.js"
class aspirante extends GeneralQuerySql {
    static aspirantRegiser = (req, res) => {
        res.render('../views/RegisterViews/registerAplicants/index.html');
    };
}    

export{
    aspirante
}