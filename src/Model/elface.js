const Pool = require("../database")



module.exports = function(){

    async function facelistando(){                                        
        let sql= "select * from users"
        return await Pool.query(sql);


    }

    async function facelis(datos){
        let sql= "insert into users set ?"
        return await Pool.query(sql,datos);


    }


    // ....................


    
    return{
        facelistando,
        facelis
      

}

}