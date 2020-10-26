import Policies from "../models/policies";
import Response from "../utils/response";

export default class policiesController {
    static getPolicesByUserName(req, res) {
        const { name } = req.body;
        const {client} = req.client;

        if(client[0].role === 'admin'){
            if (name !== 'undefined' && name !== null) {
                var finalPolices = Policies.findPoliciesByUserName(name);
                return Response.ReS(res,{
                    message: "List of Policies ",
                    Policies: finalPolices
                });
            }else{
                return Response.ReE(res,{"message":"Please send param 'name'"});
            }
        }else{
            return Response.ReE(res,{"message":"Only for admin roles'"});
        }
    }
}
    