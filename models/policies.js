import Policies from "../data/policies";
import Clients from "../data/clients";

export default class PoliciesData {

    static findPoliciesById (policiesId)  { 
        return Policies.filter(x => x.id == policiesId);
    }
    static findPoliciesByEmail(policiesEmail)  { 
        return Policies.filter(x => x.email == policiesEmail);
    }
    static findPoliciesByUserName(userName)  { 
        return Policies.filter(z => z.clientId == Clients.filter(x => x.name == userName));
    }
}
