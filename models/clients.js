import Client from "../data/clients";
import Policies from "../data/policies";
import Config from "../config/config";
const jwt = require('jsonwebtoken');

export default class Model {
    static getTokenByEmail (clientEmail) {
        const client = Client.filter(x => x.email == clientEmail);
        return jwt.sign({client}, Config.accessToken);
    }

    static findClientById (clientId)  { 
        return Client.filter(x => x.id == clientId);
    }

    static findClientByName(clientName)  { 
        return Client.filter(x => x.name == clientName);
    }
    
    static findClientByEmail(clientEmail)  { 
        return Client.filter(x => x.email == clientEmail);
    }

    static getClientByPoliceNumber(policeNumber)  { 
        return Client.filter(z => z.id == Policies.filter(x => x.id) == policeNumber);
    }
    
}
