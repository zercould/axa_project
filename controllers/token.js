import Clients from "../models/clients";
import Response from "../utils/response";


export default class tokenController {
    static getToken(req, res) {
        const { email, pwd } = req.body;
        const filterClients = {
            email, pwd
        }
        if(email !== null && email !== undefined){
            console.log(email);
            var currentClient = Clients.findClientByEmail(email);
            if(currentClient !== null && currentClient !== undefined && currentClient.length > 0){
                var accessToken = Clients.getTokenByEmail(email);
                Response.ReS(res,{accessToken});
            }else{
                Response.ReE(res,{"message":"Email no exits in database"});
            }
        }else{
            Response.ReE(res,{"message":"Please send Email"});
        }
    
    }
}
    