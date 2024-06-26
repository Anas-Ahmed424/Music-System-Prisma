import jwt from 'jsonwebtoken';

function authenticateToken(req,res,next){
    if (req.url.includes('login') || req.url.includes('add')
    || req.url.includes('create') ) {
        next()
    } else {

        console.log(" inside authentication token function")
        const authHeader = req.headers['authorization']; //Bearer Token
        const token = authHeader && authHeader.split(' ')[1];
        if(token==null) return res.status(401).json({error: "NULL token"});
        jwt.verify(token,'543ertyuihghjhgfgbngfghgfgbn',(error,user) =>{
            if (error) return res.status(403).json({error:error.message});
            req.user = user;
            next();
        })
    }
}

export default authenticateToken;