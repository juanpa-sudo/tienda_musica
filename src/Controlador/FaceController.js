const elface = require("../Model/elface")



async function facelistar(req,res){

    const resultado_listar_facebook = await elface().facelistando();
    console.log(resultado_listar_facebook);
    res.render('parcial2',{resultado_listar_facebook});

}

    async function agregaruser(req,res){
        const data=req.body; 
        await elface().agregarlike(data);
        res.redirect('elgranface');
    }

module.exports={

   
    facelistar,
    agregaruser
    
}