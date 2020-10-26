const jwt = require('jsonwebtoken');
import Config from "../config/config";
export default class token{
    static authenticateJWT(req, res, next){

        const authHeader = req.headers.authorization;
    
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            console.log(token);
            jwt.verify(token, Config.accessToken, (err, client) => {
                console.log(err);
                if (err) {
                    return res.sendStatus(403);
                }
                req.client = client;
                next();
            });
        } else {
            res.sendStatus(401);
        }
      }
}