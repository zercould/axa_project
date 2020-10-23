import Client from "../data/clients";
import Filter from  "../utils/utils"
export default class clientController {
    static getClients(req, res) {
    const { id, name, email, role } = req.body;
    const filterClients = {
        id, name , email, role
    }
    var finalClients = Filter(Client, filterClients);
    return res.status(201).json({
        count: finalClients.length,
        message: "List of Clients ",
        Client: finalClients
    });
    }
   static getRoleFromClients(clientId){
       return Client.filter(x => x.id === clientId).role;
   }
}
    