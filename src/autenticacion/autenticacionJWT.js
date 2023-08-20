const {verify} = require("jsonwebtoken")

const autenticacionJWT = (req,res,next) => {
    const authorization = req.headers.authorization

    if (!authorization){
        //next(JSON.stringify({estado:"error",msg:"No autorizado"}))
        return res.status(403).json({estado:"error",msg:"No hay autorizacion"})
    }

    try{
        const token = authorization.split(' ')[1]

        const payload = verify(token, process.env.JWT_SECRET_KEY)

        if (!payload.permisos) 
            return res.status(403).json({estado:"error",msg:"No autorizado para este contenido"})
    } catch (err){
        console.log("error en la funcion de autenticacion: " ,err)
    }
    return next()
}

exports.autenticacionJWT = autenticacionJWT