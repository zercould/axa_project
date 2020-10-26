import Model from "../models/clients";
import Response from "../utils/response";

export default class ClientController {
    static getClientById(req, res) {
        const { id } = req.body;
        if( id !== undefined && id !== null){
          
            return Response.ReS(res,{
                message: "List of Clients ",
                Client: Model.findClientById(id)
            });
        }else{
            return Response.ReE(res,{"message":"Please send param 'id'"})
        }  
    }  
    static getClientByUserName(req, res) {
        const { name } = req.body;
        if( name !== undefined && name !== null){
            return Response.ReS(res,{
                message: "List of Clients ",
                Client: Model.findClientByName(name)
            });
        }else{
            return Response.ReE(res,{"message":"Please send param 'name'"})
        }  
    }
    static getClientByPoliceNumber(req, res) {
        const { police_number } = req.body;
        const {client} = req.client;

        if(client[0].role === 'admin'){
            if( police_number !== undefined && police_number !== null){
                return Response.ReS(res,{
                    message: "List of Clients ",
                    Client: Model.getClientByPoliceNumber(police_number)
                });
            }else{
                return Response.ReE(res,{"message":"Please send param 'police_number'"})
            }  
        }else{
            return Response.ReE(res,{"message":"Only for admin roles'"});
        }
        
    }
}
    